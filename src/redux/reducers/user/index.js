import { combineReducers } from 'redux'
import { authentication } from './authentication.reducer'

export const userReducer = combineReducers({
  authentication
});