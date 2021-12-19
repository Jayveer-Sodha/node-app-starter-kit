// import and configure environment variables
import env from "dotenv";
env.config();

// exporting environment variables
export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const DB_NAME = process.env.DB_NAME;
