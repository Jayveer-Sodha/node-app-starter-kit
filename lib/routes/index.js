// start importing all routes from here
import welcomeRouter from "./welcomeRoute.js";

export const appRoutes = (app) => {
  // start defining all routes from here.
  app.use("/", welcomeRouter); // initial Welcome route

  //   route for unknown API call
  app.use(function (req, res) {
    res.status(404).send("404 page not found");
  });
};
