import bcrypt from "bcrypt";
import { User } from "./user.mongo.js";
import jwt from "jsonwebtoken";

export async function createUser(user) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: hash,
    });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;
  }
}

export async function verifyUser(user) {
  const email = user.email;
  const password = user.password;
  const userExists = await User.findOne({
    email: email,
  });
  if (!userExists) {
    return {
      error: "User does not exists",
    };
  }

  const passwordCheck = bcrypt.compareSync(password, userExists.password);
  if (passwordCheck) {
    const token = jwt.sign(
      {
        name: userExists.name,
        email: userExists.email,
        role: "ADMIN",
      },
      "shhhhh_its_a_secret"
    );
    return {
      message: "You are logged in",
      token: token,
    };
  } else {
    return {
      error: "Your password is incorrect",
    };
  }
}
