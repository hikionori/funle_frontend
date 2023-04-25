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

import React from "react";
import styles from "./style";

const HomeScreen = () => {
    return (
        <SafeAreaView>
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
                    
                </ImageBackground>

        </SafeAreaView>
    );
};

export default HomeScreen;
