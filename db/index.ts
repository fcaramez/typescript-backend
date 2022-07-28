import mongoose, { Mongoose } from "mongoose";
import MONGO_URI from "../utils/consts";

mongoose
  .connect(MONGO_URI)
  .then((x: Mongoose) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err: string) => {
    console.error("Error connecting to mongo: ", err);
  });

