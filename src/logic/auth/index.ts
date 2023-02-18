import {create} from "zustand";
import {login, auth} from '../../repository/user_reposytory';

const authStore = create((set, get) => ({
    loggedIn: false,
    token: "".toString(),
    login: async (email: string, password: string) => {
        var response = await login(email, password);
        if (response.status == 200) {
            set({loggedIn: true, token: response.data.token});
        }
    },
    logout: () => ({
        loggedIn: false,
        token: "".toString()
    }),
    auth: async (token: string) => {
        var response = await auth(token);
        if (response.status == 200) {
            set({loggedIn: true, token: token});
        }
    }
}));