import { Schema, model } from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowerCase: true,
    },
    password: {
      type: String,
      minLength: [4, "password minimum length is 8 character"],
    },
  },
  {
    timestamps: true,
  }
);

//
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 6);
});

//
userSchema.methods = {
  generatAuthToken: async function () {
    JWT.sign(
      {
        id: this._id,
        email: this.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 7 * 24 * 60 * 60 * 1000,
      }
    );
  },

  comparePassword: async function (plaintextPassword) {
    return await bcrypt.compare(plaintextPassword, this.password);
  },
};

//
const User = model("GameUser", userSchema);

export default User;
