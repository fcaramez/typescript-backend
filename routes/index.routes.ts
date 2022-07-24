const router = require("express").Router();
import isAuthenticated from "../middleware/jwt.middleware";
import { Request, Response, NextFunction } from "express";

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json("All is good in here");
});

export default router;
