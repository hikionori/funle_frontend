import React from "react";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import useAuthStore from "../../logic/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {MaterialIcons} from "@expo/vector-icons";

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
                    width: "100%",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
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
                                <MaterialIcons name="home" size={37} color="white" />
                            );
                        }
                        return (
                            <MaterialCommunityIcons
                                name="home-outline"
                                size={37}
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
                                    name="person-circle"
                                    size={37}
                                    color="white"
                                />
                            );
                        }
                        return (
                            <Ionicons
                                name="person-circle-outline"
                                size={37}
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
