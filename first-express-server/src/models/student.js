import fs from "node:fs";
import path from "path";
let students = [
  {
    id: 1,
    name: "Yasir",
    designation: null,
    cgpa: 3.4,
  },
  {
    id: 2,
    name: "Arooj",
    designation: null,
    cgpa: 3.8,
  },
  {
    id: 3,
    name: "Mahdia",
    designation: "GR",
    cgpa: 3.5,
  },
  {
    id: 4,
    name: "Ali",
    designation: "CR",
    cgpa: 3.5,
  },
];

const dir = path.resolve(); // or specify your base directory explicitly if needed

export function loadStudents() {
  console.log("directory is: ", dir);
  const filePath = path.join(dir, "src", "data", "students.txt");
  console.log("Complete path is: ", filePath);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error loading file:", err);
      return;
    }

    try {
      const preparedData = JSON.parse(data);
      students = preparedData;
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
    }
  });
}
export function getList() {
  return students;
}

export function getTopper() {
  let topper = {
    id: 0,
    name: "Dummy",
    cgpa: 0,
  };
  students.map((student) => {
    if (student.cgpa > topper.cgpa) {
      topper = student;
    }
  });
  return topper;
}

export function getCR() {
  let topper = {};
  students.map((student) => {
    if (student.designation == "CR") {
      topper = student;
    }
  });
  return topper;
}

export function getGR() {
  let topper = {};
  students.map((student) => {
    if (student.designation == "GR") {
      topper = student;
    }
  });
  return topper;
}

export function postStudent(student) {
  students.push(student);
  const content = JSON.stringify(students);
  // const completePath = path.join(dirname, "../", "data/", "students.txt");
  fs.writeFile("./src/data/students.txt", content, (err) => {
    if (err) {
      console.error("Failed to write file: ", err);
    } else {
      console.log("File updated successfully.");
    }
  });
}

export function updateStudent(id, student) {
  students.map((istudent, index) => {
    if (istudent.id == id) {
      students[index] = student;
    }
  });
  return student;
}

export function deleteStudent(id) {
  let studentToDelete = null;
  students.map((student, index) => {
    if (student.id == id) {
      studentToDelete = index;
    }
  });
  students.splice(studentToDelete, 1);
  return id;
}
