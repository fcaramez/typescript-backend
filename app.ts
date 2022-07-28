require("dotenv/config");
require("./db");
import express, { Application, Router } from "express";

const app: Application = express();
require("./config")(app);

const allRoutes: Router = require("./routes/index.routes");
app.use("/", allRoutes);

require("./error-handling")(app);

export default app;
