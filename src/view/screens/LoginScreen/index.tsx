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
    KeyboardAvoidingView,
} from "react-native";
import React, { Component, useEffect } from "react";

import { StatusBar } from "expo-status-bar";

import styles from "./styles";
import useAuthStore from "../../../logic/auth";

const LoginScreen = ({ navigation }: any) => {
    // TODO: change font family to "Fixel"
    //* TODO: useCallback to interact with zustand
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [keyboardVisible, setKeyboardVisible] = React.useState(false);

    const loggedIn: boolean = useAuthStore((state: any) => state.loggedIn);
    const login: any = useAuthStore((state: any) => state.login);

    const setAuth = useAuthStore((state: any) => state.setAuth); //! debug

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true);
        });
        Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false);
        });
    }, []);

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <KeyboardAvoidingView>
                <ImageBackground
                    source={require("../../../../assets/images/bg.png")}
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
                        source={require("../../../../assets/images/logoBig.png")}
                        style={{
                            top: -100,
                            width: 300,
                            height: 270,
                            resizeMode: "contain",
                            bottom: 0,
                            //! debug
                            // display image curner
                            // borderRadius: 20,
                            // borderColor: "black",
                            // borderWidth: 1,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <Text
                            style={{
                                top: -50,
                                color: "#E67B02",
                                fontWeight: "500",
                                fontSize: 40,
                                fontFamily: "MacPawFixelDisplay-Black",
                            }}
                        >
                            Fun
                        </Text>
                        <Text
                            style={{
                                top: -50,
                                color: "#454545",
                                fontWeight: "500",
                                fontSize: 40,
                                fontFamily: "MacPawFixelDisplay-Black",
                            }}
                        >
                            Le
                        </Text>
                    </View>
                    {/* email field */}
                    <TextInput
                        placeholder="Email"
                        style={styles.textField}
                        onChangeText={(e) => {
                            setEmail(e);
                        }}
                        textContentType="emailAddress"
                    />
                    {/* password field */}
                    <TextInput
                        // placeholderTextColor={"blac"}
                        placeholder="Password"
                        style={styles.textField}
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
                                login(email, password);
                            }
                        }}
                        style={styles.btn}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 18,
                                fontFamily: "MacPawFixelDisplay-Bold",
                            }}
                        >
                            Login
                        </Text>
                    </Pressable>
                    {/* text link to register screen 
					AKA "Don't have an account? Sign up" */}
                    {/* inline this */}
                    {!keyboardVisible && (
                        <View
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
                                    fontFamily: "MacPawFixelDisplay-Medium",
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
                                    fontFamily: "MacPawFixelDisplay-Bold",
                                }}
                            >
                                Sign up
                            </Text>
                        </View>
                    )}
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;
