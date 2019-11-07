import API from '../utils/api';

export const articleService = {
  getAll
};

function getAll() {
  return API.post('/articles')
    .then(response => {
      return response.data;
    });
}