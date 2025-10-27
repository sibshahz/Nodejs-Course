import express from "express";
import { checkAuthorization } from "../index.js";
import {
  getList,
  getTopper,
  getCR,
  getGR,
  postStudent,
  updateStudent,
  deleteStudent,
} from "../models/student.js";

const studentRouter = express.Router();

studentRouter.get("/student-list", (req, res) => {
  res.set({
    "Content-Type": "text/json",
    "Content-Length": "123",
    "Batch-Token": "12345",
  });
  res.status(201);
  res.send(getList());
});

studentRouter.get("/topper", (req, res) => {
  res.send(getTopper());
});

studentRouter.get("/CR", (req, res) => {
  res.send(getCR());
});

studentRouter.get("/GR", (req, res) => {
  res.send(getGR());
});

studentRouter.post("/student", (req, res) => {
  const newStudent = req.body;
  postStudent(newStudent);
  res.send(newStudent);
});

studentRouter.put("/student/:id", (req, res) => {
  const id = req.params.id;
  const student = req.body;
  const response = updateStudent(id, student);
  res.send(response);
});

studentRouter.delete("/student/:id", checkAuthorization, (req, res) => {
  const id = req.params.id;
  const response = deleteStudent(id);
  res.send(`Student with ${id} is deleted`);
});

export default studentRouter;
