import {create} from 'zustand';
import { get_user_info, User, UserProgress } from '../../repository/user_repository';

const useUserStore = create((set, get: any) => ({
    user: {},

    getUser: () => {
        return get().user as User;
    },

    getUserInfo: async (token: string) => {
        var response = await get_user_info(token);
        if (response) {
            set({ user: response });
        }
    },

    // join course
    addCourseToProgress: (courseId: string) => {
        // TODO: impl
    },

    // pass test
    addTestToProgress: (testId: string) => {
        // TODO: impl
    },

    // pass info
    addInfoToProgress: (infoId: string) => {
        // TODO: impl
    }
}));