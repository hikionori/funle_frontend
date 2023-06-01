import axios from "axios";
import { baseUrl } from "./constants";

const getTest = async (testId: string) => {
    
    const response = await axios.get(
        `${baseUrl}/admin/get/test?id=${testId}`
    );
    return response.data[Object.keys(response.data)[0]];
};

export { getTest };