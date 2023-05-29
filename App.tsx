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
import { NativeBaseProvider } from "native-base";

export default function App() {
  const [fontLoaded] = useFonts({
    "MacPawFixelDisplay-Black": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Black.ttf"),
    "MacPawFixelDisplay-Bold": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Bold.ttf"),
    "MacPawFixelDisplay-Medium": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Medium.ttf"),
    "MacPawFixelText-Regular": require("./assets/fonts/MacPawFixelText/OpenType-TT/MacPawFixelText-Regular.ttf"),
    "MacPawFixel-VF": require("./assets/fonts/MacPawFixel/MacPawFixel-VF.ttf"),
  });

  const loggedIn: boolean = useAuthStore((state: any) => state.loggedIn);
  //! debug
  // useEffect(() => {
  //   console.log("loggedIn", loggedIn);
  // }, [loggedIn]);

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
