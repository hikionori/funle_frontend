import React from "react";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import InfoScreen from "../screens/InfoScreen";
import TestsScreen from "../screens/TestsScreen";
import useAuthStore from "../../logic/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Text, TouchableOpacity, View } from "react-native";

export const HomeNavigation = createBottomTabNavigator();
export const AuthNavigation = createNativeStackNavigator();

export const InfoNavigation = createNativeStackNavigator(); // Navigation between info screens and home screen
export const TestsNavigation = createNativeStackNavigator(); // Navigation between tests screens and home screen

// params for InfoNavigation
export type InfoNavigationParams = {
  id: string;
};

//! NOT USE THIS. IN DEVELOPMENT
/*
    Tests is a ids array of tests
*/
// params for TestsNavigation = {}
export type TestsNavigationParams = {
  tests: string[];
};

export const HomeNavScreens = ({ navigation }: any) => {
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
              return <MaterialIcons name="home" size={37} color="white" />;
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
              return <Ionicons name="person-circle" size={37} color="white" />;
            }
            return (
              <Ionicons name="person-circle-outline" size={37} color="white" />
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
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: "fade",
      }}
    >
      {/* if loggedIn navigate to home screens, and disable authnavscreens */}

      <Stack.Screen
        name="MainScreen"
        component={HomeNavScreens}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tests"
        component={TestsScreen} // Tests dynamic navigation here
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#E67B02",
          },
          headerTintColor: "#fff",
          headerTitle: () => {},
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  // go back
                }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
