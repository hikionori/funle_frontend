import {
    Text,
    View,
<<<<<<< HEAD
    SafeAreaView, Image,
    ImageBackground
} from "react-native";

import React from "react";
=======
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
>>>>>>> profile_screen
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
                            top: -200,
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
                                top: -160,
                                color: "#000000",
                                fontWeight: "300",
                                fontSize: 30,
                                fontFamily: "MacPawFixelDisplay-Black",
                                textAlign: "center",
                            }}
                        >
                            Username
                        </Text>
                        <Text
                            style={{
                                top: -150,
                                color: "#4D4D4D",
                                fontWeight: "300",
                                fontSize: 15,
                                fontFamily: "MacPawFixelDisplay-Black",
                                textAlign: "center",
                            }}
                        >
                            mail@gmail.com
                        </Text>
                    </View>

                </ImageBackground>
           
        </SafeAreaView>
    );
};

export default ProfileScreen;
