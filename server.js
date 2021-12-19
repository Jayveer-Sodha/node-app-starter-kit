import express from "express";
import { createMongooseConnection } from "./lib/config/databaseConfig.js";
import { PORT } from "./lib/config/envConfig.js";
import expressConfig from "./lib/config/expressConfig.js";
import { appRoutes } from "./lib/routes/index.js";

// initialize express app
const app = express();

// express-app configuration
expressConfig(app);

// initializing database
createMongooseConnection();

// app routes
appRoutes(app);

// defining port for app
app.listen(PORT, () => {
  console.log(`server started on port no : ${PORT}`);
});
