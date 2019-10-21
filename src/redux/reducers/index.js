import { combineReducers } from 'redux'
import { userReducer } from './user'

const mainReducer = combineReducers({
  userReducer
});

export default mainReducer