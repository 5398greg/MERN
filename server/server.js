import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", router);

app.listen(port, () => {
  mongoose
    .connect(`${process.env.MONGO_URI}new-mern-auth`)
    .then(() => console.log("Database Connected Successfully"));

  console.log(`Server has started on port ${port}`);
});
