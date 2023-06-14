import { create } from "zustand";
import useAuthStore from "../auth";
import { getAllCourses, getCourse } from "../../repository/course_repository";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

// const userToken = useAuthStore((state: any) => state.token)

const useCourse = create((set, get: any) => ({
	id: "", // course id
	title: "", // course title
	description: "", // course description
	levels: [], // course levels

	// setters
	setId: (id: string) => set({ id: id }),
	setTitle: (title: string) => set({ title: title }),
	setDescription: (description: string) => set({ description: description }),
	setLevels: (levels: any) => set({ levels: levels }),

	// getters
	getId: () => get().id,
	getTitle: () => get().title,
	getDescription: () => get().description,
	getLevels: () => get().levels,

	// on load
	onLoad: async () => {
		const activeCourse = localStorage.getItem("activeCourse");
		if (activeCourse) {
			get().getCourse(activeCourse);
		}
	},

	// change active course
	changeActiveCourse: (id: string) => {
		localStorage.setItem("activeCourse", id);
		get().getCourse(id);
	},

	// reset
	reset: () => set({ id: "", title: "", description: "", levels: [] }),

	// api calls
	getCourse: async (id: string, token: string) => {
		const course = await getCourse(id, token);
		const levels = course.levels.sort((a: any, b: any) => a[0] - b[0]);
		set({
			id: course._id.$oid,
			title: course.title,
			description: course.description,
			levels: levels,
		});
		AsyncStorage.setItem("activeCourse", course._id.$oid);
	},

	getAllCourses: async (token: string) => {
		const courses = await getAllCourses(token);
		return courses;
	},

	// functions for remove activeCourseId from user
	leaveCourse: () => {
        get().reset();
		AsyncStorage.removeItem("activeCourse");
	},
}));

export default useCourse;
