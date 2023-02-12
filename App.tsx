import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeNavigation = createBottomTabNavigator();
const AuthNavigation = createNativeStackNavigator();

export default function App() {
    const auth = true;

    return (
        <NavigationContainer>
            {auth ? (

                <HomeNavigation.Navigator>
                    <HomeNavigation.Screen name="Home" component={HomeScreen} />
                    <HomeNavigation.Screen name="Profile" component={ProfileScreen} />
                </HomeNavigation.Navigator>
            ) : (

                <AuthNavigation.Navigator>
                    <AuthNavigation.Screen name="Login" component={LoginScreen} />
                    <AuthNavigation.Screen name="Register" component={RegisterScreen} />
                    <HomeNavigation.Screen name="Home" component={HomeScreen} />
                </AuthNavigation.Navigator>
            )}
        </NavigationContainer>
    );
}
