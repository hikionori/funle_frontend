import axios from "axios";
import { baseUrl } from "./constants";

// todo: impl
const getCourse = async (courseId: string, token: string) => {
    // url = `${baseUrl}/user/${token}/get/cource?id=${id}`
    const response = await axios.get(`${baseUrl}/user/${token}/get/cource?id=${courseId}`);
    return response.data;
};

export { getCourse };