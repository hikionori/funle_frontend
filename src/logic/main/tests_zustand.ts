import { create } from "zustand";


// TODO: think about how to store tests
const useTests = create((set, get: any) => ({
    // all tests data
    tests: [], // tests

    // corrent test data
    id: "", // test id
    question: "", // test title
    answers: [], // test answer variants
    answer: "", // test correct answer

    // setters
    setTests: (tests: any) => set({ tests: tests }),

    // getters
    getTests: () => get().tests,

    // reset
    reset: () => set({ ids: [], tests: [] }),

    resetCorrentTest: () => set({ id: "", question: "", answers: [], answer: "" }),

    // api calls
    getTestsAPI: async (ids: string[]) => {
        // TODO: get tests from api and set it to store
        /*
            For each id in ids:
                get test from api
                add test to tests
        */
    },



    addTestToUser: async (test_id: string, user_id: string) => {
        // TODO: add test to user if user not have this test
    }

}));
