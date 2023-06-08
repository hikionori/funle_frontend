import axios, { formToJSON } from "axios";
import { baseUrl } from "./constants";

export interface User {
	id: { $oid: string };
	name: string;
	email: string;
	hashed_password: string;
	role: UserRole;
	progress: UserProgress;
}

export enum UserRole {
	TEACHER = "Teacher",
	STUDENT = "Student",
	USER = "User",
}

export interface UserProgress {
	tests: string[];
	infos: string[];
	cources: string[];
}

// Send token to api and get response
// response {is_valid: boolean, user_id: string}
const auth = async (token: string) => {
	var response = await axios
		.post(baseUrl + "/auth", {
			token: token,
		})
		.catch((error) => {
			console.log(error);
		});
	if (response) {
		return response.data;
	}
};

// Send email and password to api and get response
// response {access_token, refresh_token}
const login = async (email: string, password: string) => {
	var response = await axios
		.post(baseUrl + "/user/login/users", {
			email: email,
			password: password,
		})
		.catch((error) => {
			console.log(error);
		});
	if (response) {
		return response;
	}
};

// Send name, email, password and role to api and get response
// dont have response
// return status code
const register = async (
	name: string,
	email: string,
	password: string,
	role: UserRole
) => {
	var response = await axios
		.post(baseUrl + "/user/register/users", {
			name: name,
			email: email,
			password: password,
			role: role.toString(),
		})
		.catch((error) => {
			console.log(error);
		});
	if (response) {
		return response.status;
	}
};

const get_user_info = async (token: string) => {
	var response = await axios
		.get(baseUrl + "/user/get/user?" + `token=${token}`)
		.catch((error) => {
			console.log(error);
		});

	return response && response.data;
};

// NOT USED
const add_course_to_user = async (
	course_id: string,
	user_id: string,
	token: string
) => {
	var response = await axios
		.put(baseUrl + `/user/${token}/join/course`, {
			course_id: course_id,
			user_id: user_id,
		})
		.catch((error) => {
			console.log(error);
		});
	if (response) {
		return response.data;
	}
};

const add_info_to_user = async (
	info_id: string,
	user_id: string,
	token: string
) => {
	var response = await axios
		.put(baseUrl + `/user/${token}/pass/info`, {
			info_id: info_id,
			user_id: user_id,
		})
		.catch((error) => {
			console.log(error);
		});
	if (response) {
		return response.data;
	}
};

const add_test_to_user = async (
	p_test_id: string,
	p_user_id: string,
	token: string
) => {
	let data = {
		test_id: p_test_id,
		user_id: p_user_id,
	};

	var response = await axios
		.put(baseUrl + `/user/${token}/pass/test`, data)
		.catch((error) => {
			console.log(error);
		});
	if (response) {
		return response.data;
	}
};

const add_node_to_user = async (
	p_node_id: string,
	p_user_id: string,
	token: string
) => {
	let data = {
		node_id: p_node_id,
		user_id: p_user_id,
	};
	var response = await axios
		.put(baseUrl + `/user/${token}/pass/node`, data)
		.catch((error) => {
			console.log(error);
		});
	if (response) {
		return response.data;
	}
};

export {
	auth,
	login,
	register,
	get_user_info,
	add_course_to_user,
	add_info_to_user,
	add_test_to_user,
	add_node_to_user,
};
