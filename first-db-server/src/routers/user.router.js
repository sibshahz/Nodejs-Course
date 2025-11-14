import express from "express";
import { postUser, checkUser } from "../controllers/user.controller.js";
import { checkValidSchema } from "../utils/validation.js";

const userRouter = express.Router();

userRouter.post("/", checkValidSchema, async (req, res) => {
  const user = req.body;
  const response = await postUser(user);

  res.send({
    data: response,
  });
});
userRouter.post("/login", async (req, res) => {
  const user = req.body;
  const response = await checkUser(user);
  if (response.error) {
    res.send({
      data: response,
    });
  } else {
    console.log("RESPONSE IS: ", response);
    res.cookie("token", response.token, {
      httpOnly: true,
    });
    res.send({
      data: response.message,
    });
  }
});

export default userRouter;
