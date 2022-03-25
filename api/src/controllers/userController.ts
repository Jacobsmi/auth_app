import express from "express";
import checkJwt from "../auth/checkJwt";

const router = express.Router();

router.post("/", checkJwt, async (req, res) => {
  console.log(req.user);
  return res.status(200).send({ status: "OK" });
});

router.get("/", checkJwt, async (req, res) => {
  console.log(req.user);
  return res.status(200).send({ status: "OK" });
});

export default router;
