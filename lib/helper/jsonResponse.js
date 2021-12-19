export const jsonResponse = (res, status, payload, error, message) => {
  return res.status(status).json({
    payload: payload,
    error: error,
    message: message,
    status: status.toString(),
  });
};
