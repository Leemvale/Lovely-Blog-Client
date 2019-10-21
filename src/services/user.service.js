import API from '../utils/api';

export const userService = {
  login
};

function login(email, password) {
  return API.post('/users/login', { email, password })
    .then(response => {
      return response.data.user;
    });
}