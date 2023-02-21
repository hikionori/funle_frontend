import {
    Text,
    View,
    SafeAreaView,
    Button,
    Image,
    ImageBackground,
    TextInput,
    Pressable,
    Keyboard,
} from "react-native";
import React, { Component, useEffect } from "react";

import { StatusBar } from "expo-status-bar";

import styles from "./styles";
import useAuthStore from "../../../logic/auth";


const LoginScereen = ({ navigation }: any) => {

    // TODO: change font family to "Fixel"
    //* TODO: useCallback to interact with zustand
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [keyboardVisible, setKeyboardVisible] = React.useState(false);


    const loggedIn: boolean = useAuthStore((state: any) => state.loggedIn);
    const setAuth = useAuthStore((state: any) => state.setAuth);
    console.log("loggedIn", loggedIn);

    useEffect(() => {
        if (loggedIn) {
            navigation.navigate("MainApp");
        }

        Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true);
        });
        Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false);
        });

    }, [])

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <ImageBackground
                source={require("../../../../assets/bg.png")}
                style={{
                    width: "100%",
                    height: "100%",
                    // center elements
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Logo */}
                <Image
                    source={require("../../../../assets/logoBig.png")}
                    style={{
                        top: -100,
                        width: 300,
                        height: 270,
                        resizeMode: "contain",
                        bottom: 0,
                        // display image curner
                        // borderRadius: 20,
                        // borderColor: "black",
                        // borderWidth: 1,
                    }}
                />
                <View>
                    <Text
                        style={{
                            top: -50,
                            color: "black",
                            fontWeight: "bold",
                            fontSize: 30,
                        }}
                    >
                        FunLe
                    </Text>
                </View>
                {/* email field */}
                <TextInput
                    placeholder="Email"
                    style={{
                        backgroundColor: "white",
                        padding: 10,
                        paddingLeft: 20,
                        borderRadius: 40,
                        width: 300,
                        height: 50,
                        marginBottom: 10,
                        borderColor: "black",
                        opacity: 0.54,
                        borderWidth: 1,
                    }}
                    onChangeText={(e) => {
                        setEmail(e);
                    }}
                    textContentType="emailAddress"

                />
                {/* password field */}
                <TextInput
                    placeholder="Password"
                    style={{
                        backgroundColor: "white",
                        padding: 10,
                        paddingLeft: 20,
                        borderRadius: 40,
                        width: 300,
                        height: 50,
                        marginBottom: 10,
                        borderColor: "black",
                        opacity: 0.54,
                        borderWidth: 1,
                    }}
                    onChangeText={(e) => {
                        setPassword(e);
                    }}
                    textContentType="password"
                    secureTextEntry={true}
                />
                {/* login button */}
                <Pressable
                    onPress={() => {
                        if (email && password) {
                            // navigate to home screen without chance to go back
                            setAuth(true);
                            navigation.navigate("MainApp");
                        }
                    }}
                    style={{
                        backgroundColor: "#E67B02",
                        padding: 10,
                        borderRadius: 40,
                        width: 160,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",

                        // shadow to bottom
                        shadowColor: "#E67B02",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.82,
                        shadowRadius: 3.46,

                        elevation: 9,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 15,
                            fontFamily: "sans-serif",
                        }}
                    >
                        Login
                    </Text>
                </Pressable>
                {/* text link to register screen 
					AKA "Don't have an account? Sign up" */}
                {/* inline this */}
                {!keyboardVisible && <View
                    style={{
                        flexDirection: "row",
                        // space between
                        justifyContent: "space-between",
                        // place at bottom of screen
                        position: "absolute",
                        bottom: 50,

                        zIndex: 0,
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                            paddingRight: 5,
                        }}
                    >
                        Don't have an account?
                    </Text>
                    <Text
                        onPress={() => navigation.navigate("Register")}
                        style={{
                            color: "blue",
                            // inline this
                            textDecorationLine: "underline",
                        }}
                    >
                        Sign up
                    </Text>
                </View>}
            </ImageBackground>
        </SafeAreaView>
    );
};

export default LoginScereen;
