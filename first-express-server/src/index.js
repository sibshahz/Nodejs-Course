import express from "express";
import { getList, getTopper, getCR, getGR } from "./models/student.js";

// 25
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express js server");
});

app.get("/student-list", (req, res) => {
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

app.listen(8000, () => {
  console.log("Server is up and running at 8000");
});
