import express from "express";
import {
  login,
  logout,
  register,
  sendVerifyOtp,
} from "../controller/routeController.js";
import userAuth from "../middleware/userAuth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/send-verify-otp").post(userAuth, sendVerifyOtp);

export default router;
