import { combineReducers } from 'redux';
import app from './app'
import accounts from './accounts'

export default combineReducers({
  app,
  accounts
});