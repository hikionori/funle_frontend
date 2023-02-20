import { Button, ImageBackground, Text, View } from "react-native";
import React, { Component } from "react";

const RegisterScreen = ({ navigation }) => {
    {
        return (
            <View>
                {/* set bg image */}
                <ImageBackground source={require("../../../../assets/bg.png")} style={{
                    width: "100%",
                    height: "100%",
                    // center elements
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {/* Logo */}
                    <Text>RegisterScreen</Text>
                    {/* username field */}
                    {/* email field */}
                    {/* password field */}
                    {/* register button */}
                    {/* link to login screen */}
                    <Button
                        title="Login"
                        onPress={() => navigation.navigate("Login")}
                    />
                </ImageBackground>
            </View>
        );
    }
};

export default RegisterScreen;
