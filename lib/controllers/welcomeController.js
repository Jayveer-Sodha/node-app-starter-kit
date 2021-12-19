import { MESSAGES } from "../helper/constants.js";
import { jsonResponse } from "../helper/jsonResponse.js";

export const welcome = (req, res) => {
  jsonResponse(res, 200, {}, MESSAGES.noError, MESSAGES.welcome);
};
