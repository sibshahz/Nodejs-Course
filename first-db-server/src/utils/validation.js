export async function checkValidSchema(req, res, next) {
  const requestBody = req.body;
  const email = requestBody.email;
  const password = requestBody.password;
  const name = requestBody.name;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const ok = emailRegex.exec(email);
  const validPassword = password.length >= 8;

  if (validPassword && ok) {
    next();
  } else {
    res.send("Your user sign up request is invalid");
  }
}
