import express from "express";
import {
  getList,
  getTopper,
  getCR,
  getGR,
  postStudent,
  updateStudent,
  deleteStudent,
  loadStudents,
} from "./models/student.js";
import studentRouter from "./controller/student.router.js";
import teachersRouter from "./controller/teachers.router.js";

// 25
const app = express();

app.use(express.json());

let requestCount = 0;
function requestCounter(req, res, next) {
  requestCount++;
  console.log(`This request was recieved on : ${req.url}`);
  console.log(`This is request number: ${requestCount}`);
  next();
}
app.use(requestCounter);

export function checkAuthorization(req, res, next) {
  console.log("Authorization is being checked");
  if (req.headers["role"] == "ADMIN") {
    next();
  } else {
    res.send("You are not allowed to perform delete operation");
  }
}

app.get("/", (req, res) => {
  res.send("Welcome to express js server");
});

app.use("/students", studentRouter);
app.use("/teachers", teachersRouter);

app.listen(8000, () => {
  loadStudents();
  console.log("Server is up and running at 8000");
});
