const router = require("express").Router();
import { Request, Response, NextFunction } from "express";
const fileUploader = require("../config/cloudinary.config");

router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
  res.json("All is good in here");
});

router.post(
  "/upload",
  fileUploader.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }

    res.json({ fileUrl: req.file.path });
  }
);

module.exports = router;
