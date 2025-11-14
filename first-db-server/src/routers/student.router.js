import express from "express";
import {
  getStudentList,
  postStudent,
  getStudentByRollNo,
} from "../controllers/student.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";

const studentRouter = express.Router();

studentRouter.get("/", checkAuth, async (req, res) => {
  const response = await getStudentList();

  res.send({
    data: response,
  });
});

studentRouter.get("/:rollNo", async (req, res) => {
  const rollNo = req.params.rollNo;
  console.log("Roll Number to find: ", rollNo);
  const response = await getStudentByRollNo(rollNo);
  res.send({
    data: response,
  });
});
studentRouter.post("/", async (req, res) => {
  const student = req.body;
  const response = await postStudent(student);
  res.send({
    data: response,
  });
});
export default studentRouter;
