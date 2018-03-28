import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import app from './app';

export default combineReducers({
  login,
  app,
  form: formReducer
})