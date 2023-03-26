const success_response = true;

module.exports = (request, response) =>
  request.body.user === 'Sebastian'
    ? response.status(200).json(success_response)
    : response.status(500).json('Nick equivocado');
