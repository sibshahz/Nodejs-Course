import express from "express";
import studentRouter from "./routers/student.router.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use("/student", studentRouter);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Gov ANK(S) Degree College KTS, API",
  });
});

app.listen(8000, async () => {
  console.log("Server is up and running on port 8000!");
  try {
    await mongoose.connect(
      "mongodb://user:password@127.0.0.1:27017/firstdb?authSource=admin"
    );
  } catch (error) {
    console.log("Error of connection is: ", error);
  }
});
