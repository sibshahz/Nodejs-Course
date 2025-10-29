import { Student } from "./student.mongo.js";

export async function createStudent(studentData) {
  try {
    const newStudent = new Student({
      name: studentData.name || "Dummy name",
      designation: studentData.designation || "Superman",
      percentage: studentData.percentage || 28,
      rollNo: studentData.rollNo || 3252,
    });

    const savedStudent = await newStudent.save();
    console.log("Student saved successfully:", savedStudent);
    return savedStudent;
  } catch (error) {
    console.error("Error saving student:", error);
    throw error;
  }
}

export async function studentsList() {
  const list = await Student.find();
  return list;
}

export async function studentByRollNo(studentRollNo) {
  // await Adventure.findOne({ country: "Croatia" }).exec();
  const student = await Student.findOne({
    rollNo: studentRollNo,
  }).exec();
  return student;
}
