import axios from "axios";
import { baseUrl } from "./constants";

const getTest = async (testId: string) => {
    /*
        response looks like this:
        {
            <TestType>: {
                <test data>
            }
        }

        example:
        {
            "ChoiceTest": {
                "_id": {
                    "$oid": "646876f2e3868812bd87133e"
                },
                "theme": "addition",
                "question": "1 + 1",
                "answers": [
                    "2",
                    "3",
                    "4"
                ],
                "answer": "2",
                "level": 1
            }
        }

        should be returned this:
            {
                "_id": {
                    "$oid": "646876f2e3868812bd87133e"
                },
                "theme": "addition",
                "question": "1 + 1",
                "answers": [
                    "2",
                    "3",
                    "4"
                ],
                "answer": "2",
                "level": 1
            }

    */
    const response = await axios.get(
        `${baseUrl}/admin/get/test?id=${testId}`
    );
    // TESTIT
    return response.data[Object.keys(response.data)[0]];
};

export { getTest };