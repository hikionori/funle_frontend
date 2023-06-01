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
import { getInfo } from "../../../repository/info_repository";
import { getTest } from "../../../repository/tests_repository";


const ProfileScreen = () => {
    const { logout } = useAuthStore((state: any) => ({logout: state.logout}));
    const navigation = useNavigation();

    const token = useAuthStore((state: any) => state.token);
    const user = useUserStore((state: any) => state.user);

    const user_progress = user.progress;

    // user progress in tests
    const tests: string[] = user_progress.tests; // id array of tests
    const tests_count: number = tests.length;

    const [tests_titles, setTestsTitles] = React.useState<string[][]>([]); // [[id, title], ...]
    
    // user progress in infos
    const infos: string[] = user_progress.infos; // id array of infos
    const infos_count: number = infos.length;

    const [infos_titles, setInfosTitles] = React.useState<string[][]>([]); // [[id, title], ...]

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Профіль",
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

    // TODO: test it
    useEffect(() => {
        let temp: string[][] = [];
        for (let i = 0; i < infos_count; i++) {
            getInfo(infos[i], token).then((res) => {
                temp.push([infos[i], res.title]);
            });
        }
        setInfosTitles(temp);

        temp = [];
        for (let i = 0; i < tests_count; i++) {
            getTest(tests[i]).then((res) => {
                temp.push([tests[i], res.title]);
            })
        }
        setTestsTitles(temp);
    }, [])

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
                    {/* TODO: display user progress */}
                </ImageBackground>
           
        </SafeAreaView>
    );
};

export default ProfileScreen;
