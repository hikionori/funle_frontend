import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: () => <Text>Home</Text>,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: () => <Text>Profile</Text>,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
