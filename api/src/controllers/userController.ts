import express from "express";
import checkJwt from "../auth/checkJwt";
import UserRepository from "../repositories/userRepository";

const router = express.Router();

const userRepository = new UserRepository();

router.post("/", checkJwt, async (req, res) => {
  console.log(req.user);
  return res.status(200).send({ status: "OK" });
});

router.get("/", checkJwt, async (req, res) => {
  console.log("Getting user");
  if (!req.user) {
    return res.status(400).send({ message: "no_authentication_found" })
  }
  const userIdResult = await userRepository.getUserId(req.user.sub);
  if (!userIdResult) {
    return res.status(200).send({ message: "user_not_found" })
  }
  const userInfo = await userRepository.getUserInfo(userIdResult);
  return res.status(200).send({
    data: {
      ...userInfo
    }
  });
});

export default router;
