import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { HomeNavigation, HomeNavScreens, AuthNavigation, AuthNavScreens } from "./src/view/navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    const auth = false;

    return (
        <NavigationContainer>
            {auth ? (
                <HomeNavScreens />
            ) : (
                <AuthNavScreens />
            )}
        </NavigationContainer>
    );
}
