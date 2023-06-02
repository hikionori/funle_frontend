import axios from "axios";
import { baseUrl } from "./constants";

const getInfo = async (infoId: string, token: string) => {
    const response = await axios.get(`${baseUrl}/user/${token}/get/info?id=${infoId}`);
    return response.data
};

export {getInfo};