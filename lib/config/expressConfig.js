import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

// creating config function for configure express app
function expressConfig(app) {
  //using body-parser for converting request data from Js objects to Json data.
  app.use(bodyParser.json());

  //using CORS for avoiding Cross Origin Errors
  app.use(cors());

  //   using Morgan for log of called API(s)
  app.use(morgan("dev"));
  
}
export default expressConfig;
