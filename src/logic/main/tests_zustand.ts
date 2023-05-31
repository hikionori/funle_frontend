import { create } from "zustand";
import useAuthStore from "../auth";

import { getTest } from "../../repository/tests_repository";
import { add_test_to_user } from "../../repository/user_repository";

interface Test {
	id: { $oid: string };
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
	tests: [] as Test[], // tests
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
	reset: () => {
		set({ ids: [], tests: [], activeTestIndex: 0, progress: [] });
	},

	// TODO: test this
	answer: (answer: string, user_id: string, token: string): TestState => {
		const activeTestIndex = get().activeTestIndex;
		const activeTest = get().tests[activeTestIndex];

		/**
		 * check if this is last test
		 * if yes, then check answer and return TestState.Stop
		 * if no, then check answer, increase index and return TestState.Next
		 */
		if (activeTest.answer === answer) {
			// answer is correct
			get().setProgressByIndex(activeTestIndex, 1);
		} else {
			// answer is incorrect
			get().setProgressByIndex(activeTestIndex, 0);
		}

		// check if this is last test
		if (activeTestIndex === get().tests.length - 1) {
			const progress = get().progress;
			const allPassed = progress.every((value: any) => value === 1);
			if (allPassed) {
				// add all ids of tests to userProgress
				const tests = get().tests;
				const ids = tests.map((test: any) => test._id.$oid);
				for (const id of ids) {
					add_test_to_user(id, user_id, token);
				}
			}
			get().reset();
			return TestState.Stop;
		}
		// increase index
		get().setActiveTestIndex(activeTestIndex + 1);
		return TestState.Next;
	},

	// api calls
	getTestsAPI: async (ids: string[]) => {
		const tests = await Promise.all(
			ids.map(async (id) => {
				const test = await getTest(id);
				return test;
			})
		);
		const progress = tests.map(() => undefined);
		set({ tests: tests, progress: progress, activeTestIndex: 0 });
		// console.log(get().tests);
	},
}));

export default useTests;
