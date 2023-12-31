import { create } from "zustand";
import {
	login,
	auth,
	register,
	UserRole,
} from "../../repository/user_repository";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create((set, get: any) => ({
	loggedIn: false,
	token: "".toString(),

	// request {email, password} response {aceess_token, refresh_token}
	// save refresh_token in local storage
	login: async (email: string, password: string) => {
		email = email.replace(/\s/g, "");
		var response = await login(email, password);
		// if have response with refresh_token save it in local storage
		if (response?.data.refresh_token) {
			AsyncStorage.setItem("token", response.data.refresh_token);
			set({ loggedIn: true, token: response.data.refresh_token });
		}
	},
	register: async (name: string, email: string, password: string) => {
		var response = await register(name, email, password, UserRole.USER);
		if (response == 200) {
			set({ loggedIn: false, token: "".toString() });
		}
	},
	logout: () => {
		set({ loggedIn: false, token: "".toString() });
		AsyncStorage.removeItem("token");
	},
	auth: async (token: string) => {
		var response = await auth(token);
		if (response.is_valid) {
			set({ loggedIn: true, token: token });
		}
	},
	// setAuth its debug function
	setAuth: (state: boolean) => set({ loggedIn: state, token: "".toString() }),
}));

export default useAuthStore;
