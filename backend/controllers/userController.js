import User from "../model/userSchema.js";

//
const cookiOption = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
};
//
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(name, email, password)) {
      return new Error("All field is mandatory", 402);
    }

    //
    const exists = await User.findOne({ email });
    if (exists) {
      return new Error("Email already exists", 404);
    }

    //
    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return new Error("User register not success", 405);
    }

    //
    await user.save();
    user.password = undefined;
    //
    const token = user.generatAuthToken();

    res.cookie("token", token, cookiOption);
    //
    res.status(200).json({
      success: true,
      message: "User registration successfully",
      user,
    });
  } catch (error) {
    return new Error(error);
  }
};

//logIn controllers
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email, password)) {
      return new Error("All feild require");
    }

    //
    const user = await User.findOne({ email }).select("+password");
    if (!user || !user.comparePassword(password)) {
      return new Error(
        "Email and Password dose not match, Please try again",
        404
      );
    }
    user.password = undefined;

    //
    const token = await user.generatAuthToken();
    res.cookie("token", token, cookiOption);

    //
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (e) {
    return new Error("Error in login", e);
  }
};

export { register, logIn };
