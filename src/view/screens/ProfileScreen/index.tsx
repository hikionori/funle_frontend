import {
    Text,
    View,
    SafeAreaView, Image,
    ImageBackground,
    Button
} from "react-native";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import useAuthStore from "../../../logic/auth";


const ProfileScreen = () => {

    const [fontLoaded] = useFonts({
        "MacPawFixelDisplay-Black": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Black.ttf"),
        "MacPawFixelDisplay-Bold": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Bold.ttf"),
        "MacPawFixelDisplay-Medium": require("../../../../assets/fonts/MacPawFixelDisplay/OpenType-TT/MacPawFixelDisplay-Medium.ttf"),
    });

    const { logout } = useAuthStore((state: any) => ({logout: state.logout}));

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
                    <View style={{}}>
                        {/* Button for logout */}
                        <Button
                            title="Logout"
                            color="#FFC700"
                            onPress={() => logout()}
                        />
                    </View>

                </ImageBackground>
           
        </SafeAreaView>
    );
};

export default ProfileScreen;
