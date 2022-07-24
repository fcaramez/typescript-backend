require("dotenv/config");
require("./db");
import express from "express";
import allRoutes from "./routes/index.routes";

const app: any = express();
require("./config")(app);

/* const allRoutes: File = require("./routes/index.routes") */
app.use("/", allRoutes);

require("./error-handling")(app);
module.exports = app;
