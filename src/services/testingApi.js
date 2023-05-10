import axios from 'axios';

export default class TestingApi {
	constructor() {
		this.URL = 'http://localhost:8000';
	}

	// Users
	getUser = async (token) => {
		const res = await axios.get(`${this.URL}/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return res.data;
	};

	updateUser = async (user, token) => {
		return await axios.put(`${this.URL}/me`, user, {
			headers: {
				Authorization: `Bearer ${token}`,
			}
		});
	};

	// Authorization
	authorization = async (data) => {
		const res = await axios.post(`${this.URL}/api/token/`, data);
		return res.data;
	};
}
