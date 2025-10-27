import express from "express";
import { getStudentList } from "../controllers/student.controller.js";

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  const response = getStudentList();
  res.send({
    data: response,
  });
});

export default studentRouter;
