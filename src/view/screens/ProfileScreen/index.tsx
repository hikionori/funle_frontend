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
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";


const ProfileScreen = () => {

    const [fontLoaded] = useFonts({
        "MacPawFixelDisplay-Black": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Black.ttf"),
        "MacPawFixelDisplay-Bold": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Bold.ttf"),
        "MacPawFixelDisplay-Medium": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Medium.ttf"),
    });

    if (!fontLoaded) {
        return null;
    }

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
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
                            width: 210,
                            height: 190,
                            resizeMode: "contain",
                            bottom: 0,
                            //! debug
                            // display image curner 
                            // borderRadius: 20,
                            // borderColor: "black",
                            // borderWidth: 1,
                        }}
                    />
                    <View style={{
                        flexDirection: "column",
                    }}>
                        <Text
                            style={{
                                top: -10,
                                color: "#E67B02",
                                fontWeight: "500",
                                fontSize: 40,
                                fontFamily: "MacPawFixelDisplay-Black",
                            }}
                        >
                            Username
                        </Text>
                    </View>
                </ImageBackground>
           
        </SafeAreaView>
    );
};

export default ProfileScreen;
