import { create } from "zustand";
import useAuthStore from "../auth";

interface Test {
	id: string;
	question: string;
	answers: string[];
	answer: string;
	level: number;
}

export enum TestState {
	Next,
	Stop,
}

const useTests = create((set, get: any) => ({
	// all tests data
	tests: [
		{
			id: "1",
			question: "2 + 2 = ?",
			answers: ["1", "2", "3", "4"],
			answer: "4",
			level: 2,
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

	// TODO: test this
	answer: (answer: string): TestState => {
		const activeTestIndex = get().activeTestIndex;
		const activeTest = get().tests[activeTestIndex];
		if (activeTest.answer === answer) {
			get().setProgressByIndex(activeTestIndex, 1);
		} else {
			get().setProgressByIndex(activeTestIndex, 0);
		}
		if (activeTestIndex + 1 > get().tests.length) {
			return TestState.Stop;
		} else {
			get().setActiveTestIndex(activeTestIndex + 1);
		}
		return TestState.Next;
	},

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
                activeTestIndex = 0
            
        */
	},
}));

export default useTests;
