import {
    Text,
    View,
    SafeAreaView,
    Button,
    Image,
    ImageBackground,
    TextInput,
    Pressable,
} from "react-native";
import React, { Component } from "react";

import { StatusBar } from "expo-status-bar";

import styles from "./styles";
import CustomButton from "../../components/Button";

const LoginScereen = ({ navigation }) => {
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
                        borderWidth: 1,
                    }}
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
                        borderWidth: 1,
                    }}
                />
                {/* login button */}
                <Pressable
                    onPress={() => {
                        navigation.navigate("MainApp");
                    }}
                    style={{
                        backgroundColor: "#E67B02",
                        padding: 10,
                        borderRadius: 40,
                        width: 160,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
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
                <View
                    style={{
                        flexDirection: "row",
                        // space between
                        justifyContent: "space-between",
                        // place at bottom of screen
                        position: "absolute",
                        bottom: 50,
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
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default LoginScereen;
