import { create } from "zustand";
import useAuthStore from "../auth";
import { getCourse } from "../../repository/course_repository";

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
        // TODO: sort levels by level number
        /**
         * levels: [[1, [{...}, {...}, ...]], [0, [{...}, {...}, ...]], ...]
         * 
         * after sort:
         * levels: [[0, [{...}, {...}, ...]], [1, [{...}, {...}, ...]], ...]
         */
        const levels = course.levels.sort((a: any, b: any) => a[0] - b[0]);
        set({
            id: course._id.$oid,
            title: course.title,
            description: course.description,
            levels: levels,
        });
    },

}));

export default useCourse;