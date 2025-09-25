import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is a required field"] },
  email: {
    type: String,
    required: [true, "Email is a required Field"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Passwors is a required field"],
    minlength: 8,
  },
  //   confirmPassword: {
  //     type: String,
  //     required: [true, "Please confirm your password"],
  //     validate: {
  //       validator: function (val) {
  //         return val === this.password;
  //       },
  //       message: "Password and confirm password does not match",
  //     },
  //     select: false,
  //   },
  isVerified: { type: Boolean, default: false },
  verifyOtp: { type: String, default: "" },
  verifyOtpExpiresAt: { type: Number, default: 0 },
});

const User = mongoose.model("user", userSchema);

export default User;
