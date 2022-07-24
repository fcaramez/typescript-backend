import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import MONGO_URI from "../utils/consts";

module.exports = (app: any) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "super secret key",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: MONGO_URI,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        sameSite: "none",
        secure: process.env.NODE_ENV === "production",
      },
    })
  );

  app.use((req: any, res: any, next: any) => {
    req.user = req.session.user || null;
    next();
  });
};
