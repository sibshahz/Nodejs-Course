import mongoose from "mongoose";

const StudentScehma = new mongoose.Schema({
  name: { type: String },
  rollNo: { type: String },
  designation: { type: String },
  percentage: { type: Number },
});

export const Student = mongoose.model("Student", StudentScehma);
