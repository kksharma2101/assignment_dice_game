import express from "express";
import connectToDb from "./config/db.js";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  //
  console.log(`Server is running on ${PORT}`);
  //
  connectToDb();
});
