import axios from "axios";
import { baseUrl } from "./constants";

export interface User {
    id: String;
    name: string;
    email: string;
    hashed_password: string;
    role: UserRole;
    progress: UserProgress;
}

export enum UserRole {
    TEACHER = "Teacher",
    STUDENT = "Student",
    USER = "User"
}

export interface UserProgress {
    tests: string[];
    infos: string[];
    cources: string[];
}

// Send token to api and get response 
// response {is_valid: boolean, user_id: string}
const auth = async (token: string) => {
    var response = await axios.post(baseUrl + "/auth", {
        "token": token
    }).catch((error) => {
        console.log(error);
    });
    if (response) {
        return response.data;
    }
}

// Send email and password to api and get response
// response {access_token, refresh_token}
const login = async (email: string, password: string) => {
    var response = await axios.post(baseUrl + "/user/login/users", {
        "email": email,
        "password": password
    }).catch((error) => {
        console.log(error);
    });
    if (response) {
        return response;
    }
}

// Send name, email, password and role to api and get response
// dont have response
// return status code
const register = async (name: string, email: string, password: string, role: UserRole) => {
    var response = await axios.post(baseUrl + "/user/register/users", {
        "name": name,
        "email": email,
        "password": password,
        "role": role.toString()
    }).catch((error) => {
        console.log(error);
    }
    );
    if (response) {
        return response.status;
    }
}

const get_user_info = async (token: string) => {
    var response = await axios.post(baseUrl + "/user/get/user" + `/${token}`).catch((error) => {
        console.log(error);
    });
    if (response) {
        return response.data as User;
    }
}

const add_course_to_user = async (course_id: string, user_id: string) => {
    // TODO: implement this
}

export { auth, login, register, get_user_info };