import { create } from "zustand";
import useAuthStore from "../auth";



/*
    Algorithm:
        1. ids -> getTestsAPI -> tests
        2. Define active test -> setTest
            2.1 remove test from tests
        3. addTestToUser
*/

interface Test {
    id: string,
    question: string,
    answers: string[],
    answer: string,
    level: number
}

// TODO: think about how to store tests
const useTests = create((set, get: any) => ({
    // all tests data
    tests: [
        {
            id: "1",
            question: "2 + 2 = ?",
            answers: ["1", "2", "3", "4"],
            answer: "4",
            level: 1,
        },
        {
            id: "2",
            question: "2 * 2 + 2 = ?",
            answers: ["2*2+2"],
            answer: "6",
            level: 2,
        },
    ] as Test[], // tests
    activeTestIndex: 0, // index of active test
    progress: [], // tests progress. 0 - not passed, 1 - passed, undefined - not passed yet

    // setters
    setTests: (tests: any) => set({ tests: tests }),
    setActiveTestIndex: (index: number) => set({ activeTestIndex: index }),
    setProgressByIndex: (index: number, value: number) => {
        const progress = get().progress;
        progress[index] = value;
        set({ progress: progress });
    },
    setProgress: (progress: any[]) => set({ progress: progress }),

    // getters
    getTests: () => get().tests,

    // reset
    reset: () => set({ ids: [], tests: [] }),

    // api calls
    getTestsAPI: async (ids: string[], token: string) => {
        // TODO: get tests from api and set it to store
        /*
            For each id in ids:
                get test from api
                add test to tests
            for length of tests:
                add undefined to progress
            
            example:
                ids = ["1", "2", "3"]
                progress = [undefined, undefined, undefined]
            
        */
    },

    // i`m not sure about this but i wrote it
    getTest: (index: number) => {
        // get first test from tests and delete it
        const test = get().tests[index];
        const tests = get().tests;
        tests.splice(index, 1);
        set({ tests: tests });
        return test;
    }

}));

export default useTests;