import express from "express";

const teachersRouter = express.Router();

teachersRouter.get("/list", (req, res) => {
  res.send([
    {
      name: "Zulfiqar",
    },
    {
      name: "Sajid Tanveer",
    },
    {
      name: "Alam Zeb",
    },
    {
      name: "Ammar Choudary",
    },
  ]);
});

teachersRouter.get("/best-teacher", (req, res) => {
  res.send({
    name: "Ammar Choudary",
  });
});

export default teachersRouter;
