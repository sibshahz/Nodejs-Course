import http from "node:http";

const hostname = "127.0.0.1";
const port = 8000;

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

function getList() {
  return students;
}

function getTopper() {
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

function getCR() {
  let topper = {};
  students.map((student) => {
    if (student.designation == "CR") {
      topper = student;
    }
  });
  return topper;
}

function getGR() {
  let topper = {};
  students.map((student) => {
    if (student.designation == "GR") {
      topper = student;
    }
  });
  return topper;
}

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");

  let response;
  switch (req.url) {
    case "/student-list":
      response = getList();
      break;
    case "/topper":
      response = getTopper();
      break;
    case "/CR":
      response = getCR();
      break;
    case "/GR":
      response = getGR();
      break;
    default:
      response = "INVALID REQUEST";
  }
  const finalRes = await JSON.stringify(response);
  res.end(finalRes);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
