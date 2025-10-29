import {
  createStudent,
  studentsList,
  studentByRollNo,
} from "../models/student.model.js";

export async function getStudentList() {
  const studentList = await studentsList();
  return studentList;
}

export async function postStudent(student) {
  const result = await createStudent(student);
  return result;
}

export async function getStudentByRollNo(rollNo) {
  const result = await studentByRollNo(rollNo);
  return result;
}
