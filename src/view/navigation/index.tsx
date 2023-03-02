import React from "react";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import useAuthStore from "../../logic/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "@expo/vector-icons/Ionicons";

export const HomeNavigation = createBottomTabNavigator();
export const AuthNavigation = createNativeStackNavigator();

export const HomeNavScreens = () => {
    return (
        <HomeNavigation.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "#E67B02",
                    height: 55,
                    bottom: 5,
                    left: 10,
                    right: 10,
                    width: "95%",
                    borderRadius: 15,
                    elevation: 0,
                },
            }}
            initialRouteName="Home"
        >
            <HomeNavigation.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <Ionicons name="home" size={24} color="white" />
                            );
                        }
                        return (
                            <Ionicons
                                name="home-outline"
                                size={24}
                                color="white"
                            />
                        );
                    },
                    tabBarShowLabel: false,
                }}
            />
            <HomeNavigation.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    name="person"
                                    size={24}
                                    color="white"
                                />
                            );
                        }
                        return (
                            <Ionicons
                                name="person-outline"
                                size={24}
                                color="white"
                            />
                        );
                    },
                    tabBarShowLabel: false,
                }}
            />
        </HomeNavigation.Navigator>
    );
};

export const AuthNavScreens = () => {
    return (
        <AuthNavigation.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                animation: "slide_from_right",
            }}
            initialRouteName="Login"
        >
            <AuthNavigation.Screen name="Login" component={LoginScreen} />
            <AuthNavigation.Screen name="Register" component={RegisterScreen} />
            {/* <AuthNavigation.Screen name="MainApp" component={HomeNavScreens} /> */}
        </AuthNavigation.Navigator>
    );
};

export const AppNavigation = () => {
    const { loggedIn } = useAuthStore((state: any) => state.loggedIn);
    return (
        <NavigationContainer>
            {/* if loggedIn navigate to home screens, and disable authnavscreens */}
            {loggedIn ? <HomeNavScreens /> : <AuthNavScreens />}
        </NavigationContainer>
    );
};
