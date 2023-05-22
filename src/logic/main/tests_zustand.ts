import { create } from "zustand";
import useAuthStore from "../auth";



/*
    Algorithm:
        1. ids -> getTestsAPI -> tests
        2. Define active test -> setTest
            2.1 remove test from tests
        3. addTestToUser
*/

const token = useAuthStore((state: any) => state.token);

// TODO: think about how to store tests
const useTests = create((set, get: any) => ({
    // all tests data
    tests: [], // tests

    // setters
    setTests: (tests: any) => set({ tests: tests }),

    // getters
    getTests: () => get().tests,

    // reset
    reset: () => set({ ids: [], tests: [] }),

    // api calls
    getTestsAPI: async (ids: string[]) => {
        // TODO: get tests from api and set it to store
        /*
            For each id in ids:
                get test from api
                add test to tests
        */
    },

    //? FIXME: transfer to user_zustand
    addTestToUser: async (test_id: string, user_id: string) => {
        // TODO: add test to user if user not have this test
    },

    // i`m not sure about this but i wrote it
    getTest: () => {
        // get first test from tests and delete it
        const test = get().tests[0];
        set({ tests: get().tests.slice(1) });
        return test;
    }

}));

const useActiveTest = create((set, get: any) => ({
    // active test data
    id: "", // test id
    question: "", // test title
    answers: [], // test answer variants
    answer: "", // test correct answer

    // constructor
    setTest: (test: any) => set({ id: test.id, question: test.question, answers: test.answers, answer: test.answer }),

    // getters
    getId: () => get().id,
    getQuestion: () => get().question,
    getAnswers: () => get().answers,
    getAnswer: () => get().answer,

    // reset
    reset: () => set({ id: "", question: "", answers: [], answer: "" }),
}));


export { useTests, useActiveTest };