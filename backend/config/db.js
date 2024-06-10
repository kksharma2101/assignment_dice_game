import mongoose from "mongoose";

const connectToDb = async (req, res) => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    if (connect) {
      console.log("DB connect successfully");
    }
  } catch (e) {
    console.log(e);
  }
};

export default connectToDb;
