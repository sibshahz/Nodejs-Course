import { createUser, verifyUser } from "../models/user.model.js";

export async function postUser(user) {
  const result = await createUser(user);
  return result;
}
export async function checkUser(user) {
  const result = await verifyUser(user);
  return result;
}
