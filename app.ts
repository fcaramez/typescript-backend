
require("dotenv/config");
require("./db");
import express from "express";

const app = express();
require("./config")(app);

const allRoutes = require("./routes/index.routes");
app.use("/", allRoutes);

require("./error-handling")(app);

export default app;

