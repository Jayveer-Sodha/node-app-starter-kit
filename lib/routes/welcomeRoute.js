import express from "express";
import { welcome } from "../controllers/welcomeController.js";

// initializing router
const welcomeRouter = express.Router();

// initializing routes
welcomeRouter.get("/", welcome);

export default welcomeRouter;
