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

const auth = async (token: string) => {
    var response = await axios.post(`${baseUrl}/auth`, {"token": token})
    return response.data
}

const login = async (email: string, password: string) => {
    var res = await axios.post(`${baseUrl}/user/login/users`, {"email": email, "password": password});
    return res.data
}

const register = async (name: string, email: string, password: string, role: UserRole) => {
    var response = await axios.post(`${baseUrl}/user/regisyer/users`, {
        "name": name,
        "email": email,
        "password": password,
        "role": role.toString
    })
    return response.status
}

