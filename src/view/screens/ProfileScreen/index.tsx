import {
    Text,
    View,
    SafeAreaView, Image,
    ImageBackground,
    Button
} from "react-native";

import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import useAuthStore from "../../../logic/auth";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "native-base";
import useUserStore from "../../../logic/main/user_zuzstand";


const ProfileScreen = () => {
    const { logout } = useAuthStore((state: any) => ({logout: state.logout}));
    const navigation = useNavigation();

    const user = useUserStore((state: any) => state.user);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Profile",
            headerRight: () => {
                return(
                    <IconButton
                        icon={<MaterialCommunityIcons name="logout" size={24} color="white" />}
                        onPress={() => logout()}
                    />
                )
            },
            // header style
            headerStyle: {
                backgroundColor: "#E67B02",
                height: 100,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                
            },
            headerTitleStyle: {
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
            },
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <StatusBar style="light" />
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
                            {user.username}
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
                            {user.email}
                        </Text>
                    </View>
                </ImageBackground>
           
        </SafeAreaView>
    );
};

export default ProfileScreen;
