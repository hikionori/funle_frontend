import React, { useEffect } from "react";

import {
  AuthNavScreens,
  AppNavigation
} from "./src/view/navigation";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";

import useAuthStore from "./src/logic/auth";
import useCourse from "./src/logic/main/course_zustand";
import useUserStore from "./src/logic/main/user_zuzstand";

import { AsyncStorage } from "react-native";

export default function App() {
  const [fontLoaded] = useFonts({
    "MacPawFixelDisplay-Black": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Black.ttf"),
    "MacPawFixelDisplay-Bold": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Bold.ttf"),
    "MacPawFixelDisplay-Medium": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Medium.ttf"),
    "MacPawFixelDisplay-Regular": require("./assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Regular.ttf"),
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
  useEffect(() => {
    AsyncStorage.getItem("token").then((value) => {
      if (value) {
        auth(value);
      }
      if (loggedIn) {
        getUserInfo(token);
        // console.log("token", token);
        AsyncStorage.setItem("activeCourse", "647724281951420a1476048e")
        getCourse("647724281951420a1476048e", token); // TODO: change this to user chosen course
      }
    });
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
