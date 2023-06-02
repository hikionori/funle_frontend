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
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";

import useAuthStore from "./src/logic/auth";
import useCourse from "./src/logic/main/course_zustand";
import useUserStore from "./src/logic/main/user_zuzstand";

export default function App() {
  const [fontLoaded] = useFonts({
    "MacPawFixelDisplay-Black": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Black.ttf"),
    "MacPawFixelDisplay-Bold": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Bold.ttf"),
    "MacPawFixelDisplay-Medium": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Medium.ttf"),
    "MacPawFixelText-Regular": require("./assets/fonts/MacPawFixelText/OpenType-TT/MacPawFixelText-Regular.ttf"),
    "MacPawFixel-VF": require("./assets/fonts/MacPawFixel/MacPawFixel-VF.ttf"),
  });

  const loggedIn: boolean = useAuthStore((state: any) => state.loggedIn);

  const token: string = useAuthStore((state: any) => state.token);
  const auth = useAuthStore((state: any) => state.auth);

  const getUserInfo = useUserStore((state: any) => state.getUserInfo);
  const getCourse: (course_id: string, token: string) => any = useCourse(
    (state: any) => state.getCourse
  );

  //! debug
  // useEffect(() => {
  //   console.log("loggedIn", loggedIn);
  // }, [loggedIn]);

  useEffect(() => {
    
    let l_token = localStorage.getItem("token");
    if (l_token) {
      auth(l_token);
    }

    if (loggedIn) {
      getUserInfo(token);
      // console.log("token", token);
      getCourse("647724281951420a1476048e", token);
    } 
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {loggedIn ? <AppNavigation /> : <AuthNavScreens />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
