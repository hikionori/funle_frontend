import {create} from 'zustand';
import { get_user_info, User, UserProgress, add_course_to_user, add_info_to_user, add_test_to_user } from '../../repository/user_repository';

const useUserStore = create((set, get: any) => ({
    user: {},

    developer: false,

    getUser: () => {
        return get().user as User;
    },

    setDeveloper: (value: boolean) => {
        set({ developer: value });
    },

    getUserInfo: async (token: string) => {
        var response = await get_user_info(token);
        if (response) {
            set({ user: response });
        }
    },

    setUser: (user: User) => {
        set({ user: user });
    },

    // join course
    addCourseToProgress: (courseId: string, token: string) => {
        add_course_to_user(courseId, get().user._id.$oid, token);
    },

    // pass test
    addTestToProgress: (testId: string, token: string) => {
        add_test_to_user(testId, get().user._id.$oid, token);
    },

    // pass info
    addInfoToProgress: (infoId: string, token: string) => {
        add_info_to_user(infoId, get().user._id.$oid, token);
    }
}));

export default useUserStore;