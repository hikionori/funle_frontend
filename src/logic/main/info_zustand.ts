import { create } from "zustand";

import useAuthStore from "../auth";
import { getInfo } from "../../repository/info_repository";

// const token = useAuthStore((state: any) => state.token);

const useInfo = create((set, get: any) => ({
  id: "", // info id
  title: "", // info title
  content_levels: [], // info content_levels

  // setters
  setId: (id: string) => {
    set({ id: id });
  },
  setTitle: (title: string) => {
    set({ title: title });
  },
  setContentLevels: (content_levels: Array<any>) => {
    set({ content_levels: content_levels });
  },

  // getters
  getId: () => get().id,
  getTitle: () => get().title,
  getContentLevels: () => get().content_levels,

  // reset
  reset: () => set({ id: "", title: "", content_levels: [] }),

  // api calls
  getInfo: async (ids: string[], token: string) => {
    const info = await getInfo(ids[0], token);
    // sort content_levels by level
    info.content_levels.sort((a: any, b: any) => a[0] - b[0]);
    set({
      id: info._id.$oid,
      title: info.title,
      content_levels: info.content_levels,
    });
  },
}));

export default useInfo;
