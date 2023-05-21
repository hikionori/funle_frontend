import { create } from "zustand";
import useAuthStore from "../auth";
import { getInfo } from "../../repository/info_repository";

const token = useAuthStore((state: any) => state.token);

const useInfo = create((set, get: any) => ({
    id: "", // info id
    title: "", // info title
    content_levels: [], // info content_levels

    // setters
    setId: (id: string) => set({ id: id }),
    setTitle: (title: string) => set({ title: title }),
    setContentLevels: (content_levels: any) => set({ content_levels: content_levels }),

    // getters
    getId: () => get().id,
    getTitle: () => get().title,
    getContentLevels: () => get().content_levels,

    // reset
    reset: () => set({ id: "", title: "", content_levels: [] }),

    // api calls
    getInfo: async (id: string) => {
        const info = await getInfo(id, token);
        set({
            id: info._id.$oid,
            title: info.title,
            content_levels: info.content_levels
        });
    },

    addInfoToUser: async (info_id: string, user_id: string) => {
        // TODO: add info to user if user not have this info
    },
}));