// 3.2.2 Crear src/reducers/index.js
import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';
import warnings from './warnings';
import auth from './auth';

export default combineReducers({
	'leadReducer': leads,
	errors,
	messages,
	warnings,
	auth,
});
