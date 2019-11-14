import API from '../utils/api';

export const articleService = {
  getAll,
  getById
};

function getAll() {
  return API.post('/articles')
    .then(response => {
      return response.data;
    });
}

function getById(articleId) {
  return API.get(`/articles/${articleId}`)
    .then(response => {
      return response.data;
    });
}