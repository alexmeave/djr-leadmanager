import axios from 'axios';
import { returnErrors } from './messages';

import{
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from './types';


// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
	// User Loading
	dispatch({type: USER_LOADING });
	
	const config = tokenConfig(getState);
	
	if(!config.headers['Authorization']){
		return dispatch({
			type: AUTH_ERROR
		})
	}

	axios.get('/api/auth/user', config)
		.then( res => {
			dispatch({
				type: USER_LOADED,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR
			})
		})
}


// Login user
export const login = (username, password) => (dispatch) => {

	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// Request body
	const body = JSON.stringify({ username, password });

	axios.post('/api/auth/login', body, config)
		.then( res => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: LOGIN_FAIL
			})
		})
}


// Register user
export const register = ({ username, password, email }) => (dispatch) => {

	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// Request body
	const body = JSON.stringify({ username, email, password });

	axios.post('/api/auth/register', body, config)
		.then( res => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: REGISTER_FAIL
			})
		})
}


// LOGOUT USER
export const logout = () => (dispatch, getState) => {

	axios.post('/api/auth/logout', null, tokenConfig(getState))
		.then( res => {
			dispatch({
				type: LOGOUT_SUCCESS,
			})
		})
		.catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
		})
}


// Setup config with config - helper function
export const tokenConfig = getState => {
	// Get token from state
	const token = getState().auth.token;

	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// If token, add to headers
	if(token){
		config.headers['Authorization'] = `Token ${token}`
	}

	return config;
}