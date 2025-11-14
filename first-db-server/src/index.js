import express from "express";
import studentRouter from "./routers/student.router.js";
import mongoose from "mongoose";
import userRouter from "./routers/user.router.js";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/student", studentRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Gov ANK(S) Degree College KTS, API",
  });
});

app.listen(8000, async () => {
  console.log("Server is up and running on port 8000!");
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log("Error of connection is: ", error);
  }
});
