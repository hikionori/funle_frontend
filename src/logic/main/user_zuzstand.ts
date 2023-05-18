import {create} from 'zustand';
import { get_user_info, User, UserProgress } from '../../repository/user_repository';

const useUserStore = create((set, get: any) => ({
    user: {} as User,
    progress: {} as UserProgress,

    getUser: () => {
        return get().user as User;
    },

    getUserInfo: async (token: string) => {
        var response = await get_user_info(token);
        if (response) {
            set({ user: response });
        }
    },
}));