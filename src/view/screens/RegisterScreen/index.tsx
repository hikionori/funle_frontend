import {
    Button,
    ImageBackground,
    Keyboard,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
} from "react-native";
import React, { Component, useEffect } from "react";

import styles from "./styles";
import useAuthStore from "../../../logic/auth";
import { useFonts } from "expo-font";

const RegisterScreen = ({ navigation }: any) => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [keyboardVisible, setKeyboardVisible] = React.useState(false);
    const register: any = useAuthStore((state: any) => state.register);

    const [fontLoaded] = useFonts({
        "MacPawFixelDisplay-Black": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Black.ttf"),
        "MacPawFixelDisplay-Bold": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Bold.ttf"),
        "MacPawFixelDisplay-Medium": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Medium.ttf")
    });

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardVisible(true);
        });
        Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardVisible(false);
        });

        // loadFontAsync();

    }, []);

    if (!fontLoaded) {
        return null;
    }

    return (
        <View>
            {/* set bg image */}
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
                <View>
                    <Text
                        style={{
                            top: -50,
                            color: "black",

                            // fontWeight: "100",
                            fontSize: 40,
                            // fontStyle: "normal",
                            fontFamily: "MacPawFixelDisplay-Black",
                            lineHeight: 45,
                            paddingBottom: -10,
                        }}
                    >
                        FunLe
                    </Text>
                </View>
                {/* username field */}
                <TextInput
                    placeholder="Username"
                    style={styles.textField}
                    onChangeText={(e) => {
                        setUsername(e);
                    }}
                    textContentType="username"
                />
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
                    placeholder="Password"
                    style={styles.textField}
                    onChangeText={(e) => {
                        setPassword(e);
                    }}
                    textContentType="password"
                    secureTextEntry={true}
                />
                {/* register button */}
                <Pressable
                    onPress={() => {
                        register(username, email, password);
                        navigation.navigate("Login");
                    }}
                    style={styles.btn}
                >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 18,
                            fontFamily: "MacPawFixelDisplay-Black",
                        }}
                    >
                        Sign Up
                    </Text>
                </Pressable>
                {/* link to login screen */}
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
                                fontFamily: "MacPawFixelDisplay-Medium"
                            }}
                        >
                            Already have an account?
                        </Text>
                        <Text
                            onPress={() => navigation.navigate("Login")}
                            style={{
                                color: "blue",
                                // inline this
                                textDecorationLine: "underline",
                                fontFamily: "MacPawFixelDisplay-Bold"
                            }}
                        >
                            Login
                        </Text>
                    </View>
                )}
            </ImageBackground>
        </View>
    );
};

export default RegisterScreen;
function setKeyboardVisible(arg0: boolean) {
    throw new Error("Function not implemented.");
}
