import express from "express";
import connectToDb from "./config/db.js";
import "dotenv/config";
import cors from "cors";
import router from "./router/userRouter.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

app.use("/user/v1", router);

app.listen(PORT, async () => {
  //
  console.log(`Server is running on ${PORT}`);
  //
  connectToDb();
});
