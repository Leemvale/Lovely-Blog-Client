import { userService } from 'services/user.service';
import { userConstants } from '../constants';
import history from '../../history';

export function login(email, password) {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        user => {
          debugger
          dispatch(success(user));
          history.push('/articles')
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );
  }

  function request(email) { return { type: userConstants.LOGIN_REQUEST, email } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}



