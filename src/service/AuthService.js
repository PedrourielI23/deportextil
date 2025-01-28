import axios from "axios";
//import authHeader from "./AuthHeaderService";
import jwt from 'jwt-decode'


//const API_BACKEND = process.env.REACT_APP_API_BACKEND;

const API_URL = '/nomina/api/auth/signin';
//, { headers: authHeader() }
export const login = (username, password) => {
	return axios.post(API_URL, { username, password }).then((response) => {

//		const token = response.data.token;
//		token && sessionStorage.setItem('user', JSON.stringify(response.data));
		return response.data;
	});
};

export const isAuthenticated = () => {
	const user = sessionStorage.getItem('user');
	if (!user) {
		return {}
	}
	return JSON.parse(user);
};


