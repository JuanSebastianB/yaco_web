const mock = [{
  idSite: 1,
  name: 'Amigos Pizza Show',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  creationDate: '2020-09-06T22:35:19.000+00:00',
  ubication: 'car 6 # 4 5',
  startDate: '2020-09-06T22:35:31.000+00:00',
  finishtDate: '2020-09-06T22:35:33.000+00:00',
  status: '1',
  idCategory: 3,
  idLocation: 3
}, {
  idSite: 2,
  name: 'Punto Blanco',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  creationDate: '2020-09-06T22:35:19.000+00:00',
  ubication: 'car 6 # 4 5',
  startDate: '2020-09-06T22:35:31.000+00:00',
  finishtDate: '2020-09-06T22:35:33.000+00:00',
  status: '1',
  idCategory: 3,
  idLocation: 3
}];

module.exports = (request, response) => response.status(200).json(mock);