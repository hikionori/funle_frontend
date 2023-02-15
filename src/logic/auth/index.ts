import {create} from "zustand";

const authStore = create((set, get) => ({
    loggedIn: false,
    loggin: () => ({}),
    loggout: () => ({})
}));