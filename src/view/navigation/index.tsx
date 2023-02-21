import React from "react";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import useAuthStore from "../../logic/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export const HomeNavigation = createBottomTabNavigator();
export const AuthNavigation = createNativeStackNavigator();

export const HomeNavScreens = () => {
    return (
        <HomeNavigation.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeNavigation.Screen name="Home" component={HomeScreen} />
            <HomeNavigation.Screen name="Profile" component={ProfileScreen} />
        </HomeNavigation.Navigator>
    );
}

export const AuthNavScreens = () => {
    return (
        <AuthNavigation.Navigator screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animation: "slide_from_right",
        }}>
            <AuthNavigation.Screen name="Login" component={LoginScreen} />
            <AuthNavigation.Screen name="Register" component={RegisterScreen} />
            {/* <AuthNavigation.Screen name="MainApp" component={HomeNavScreens} /> */}
        </AuthNavigation.Navigator>
    );
}

export const AppNavigation = () => {
    const { loggedIn } = useAuthStore((state: any) => state.loggedIn);
    return (
        <NavigationContainer>
            {/* if loggedIn navigate to home screens, and disable authnavscreens */}
            {loggedIn ? <HomeNavScreens /> : <AuthNavScreens />}
        </NavigationContainer>
    );
}