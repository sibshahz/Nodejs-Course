const students = [
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
