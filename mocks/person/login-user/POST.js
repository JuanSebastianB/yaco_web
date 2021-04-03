const success_response = true;

module.exports = (request, response) =>
  response.status(200).json(success_response);