import AuthAPI from '../utils/auth-api';
import API from '../utils/api';

export const userService = {
  login,
  getUserProfile
};

function login(email, password) {
  const body = {
    user: {email, password }
  }
  return AuthAPI.post('/sign_in', body)
    .then(response => {
      return response.data;
    });
}

function getUserProfile(userId) {
  return API.get(`/profiles/${userId}`)
    .then(response => {
      return response.data;
    });
}