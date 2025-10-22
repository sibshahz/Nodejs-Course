import express from "express";
import {
  getList,
  getTopper,
  getCR,
  getGR,
  postStudent,
  updateStudent,
  deleteStudent,
} from "./models/student.js";

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

function checkAuthorization(req, res, next) {
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

app.get("/student-list", (req, res) => {
  res.set({
    "Content-Type": "text/json",
    "Content-Length": "123",
    "Batch-Token": "12345",
  });
  res.status(201);
  res.send(getList());
});

app.get("/topper", (req, res) => {
  res.send(getTopper());
});

app.get("/CR", (req, res) => {
  res.send(getCR());
});

app.get("/GR", (req, res) => {
  res.send(getGR());
});

app.post("/student", (req, res) => {
  const newStudent = req.body;
  postStudent(newStudent);
  res.send(newStudent);
});

app.put("/student/:id", (req, res) => {
  const id = req.params.id;
  const student = req.body;
  const response = updateStudent(id, student);
  res.send(response);
});

app.delete("/student/:id", checkAuthorization, (req, res) => {
  const id = req.params.id;
  const response = deleteStudent(id);
  res.send(`Student with ${id} is deleted`);
});
app.listen(8000, () => {
  console.log("Server is up and running at 8000");
});
