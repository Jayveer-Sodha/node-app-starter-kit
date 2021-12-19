import mongoose from "mongoose";
import { DB_NAME, DB_URL } from "./envConfig.js";

export const createMongooseConnection = () => {
  let middleware = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(DB_URL + DB_NAME, middleware)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("Error while connecting to database: ", error);
    });
  mongoose.connection.on("disconnected", function (err) {
    console.error("Db Disconnected=", err && err);
  });
};
