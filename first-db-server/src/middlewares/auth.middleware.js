import jwt from "jsonwebtoken";

export async function checkAuth(req, res, next) {
  const cookies = req.cookies;
  if (cookies.token) {
    const signVerify = await jwt.verify(cookies.token, "shhhhh_its_a_secret");
    console.log("VERIFY STATUS: ", signVerify);
    if (signVerify) {
      next();
    } else {
      res.send({
        error: "You are not logged in!!!!",
      });
    }
  }
}
