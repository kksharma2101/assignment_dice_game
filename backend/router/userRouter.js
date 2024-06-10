import express from "express";
import { logIn, register } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);
router.post("/logIn", logIn);

export default router;
