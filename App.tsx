import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";
import {
    HomeNavigation,
    HomeNavScreens,
    AuthNavigation,
    AuthNavScreens,
    AppNavigation,
} from "./src/view/navigation";
import { NavigationContainer } from "@react-navigation/native";
import useAuthStore from "./src/logic/auth";
import { useFonts } from "expo-font";

export default function App() {
    const [fontLoaded] = useFonts({});
    const loggedIn: boolean = useAuthStore((state: any) => state.loggedIn);
    useEffect(() => {
        console.log("loggedIn", loggedIn);
    }, [loggedIn]);
    return (
        <NavigationContainer>
            {loggedIn ? <AppNavigation /> : <AuthNavScreens />}
        </NavigationContainer>
    );
}
