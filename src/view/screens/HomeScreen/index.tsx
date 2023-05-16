<<<<<<< HEAD
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
=======
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
>>>>>>> profile_screen
import styles from "./style";
import Node from "../../components/CourseComponents/Node";

const HomeScreen = ({ navigation }: any) => {
    const onNodePress = (type_: string) => {
        navigation.navigate(type_);
    };

    return (
<<<<<<< HEAD
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
            <View style={styles.container}>
                <Node
                    title="Multiplication by 2"
                    mini_image="https://bafybeic55zrogt3gqr2wxr4nqh7vlobeo7qg7mxrxoidnpaorcosob3dxi.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-2.png"
                    type_="info"
                    n_of_tests={0}
                    onNodePress={onNodePress}
                />
                <View style={styles.row}>
                    <Node
                        title="Multiplication by 2 test"
                        mini_image="https://bafybeidy2qx7ijtup3uqc45tjwemijjidl2oxlcwjy6wzq2hgs5oacrfk4.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-2-test.png"
                        type_="test"
                        n_of_tests={2}
                        onNodePress={onNodePress}
                    />
                    <Node
                        title="Multiplication by 2 test"
                        mini_image="https://bafybeidy2qx7ijtup3uqc45tjwemijjidl2oxlcwjy6wzq2hgs5oacrfk4.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-2-test.png"
                        type_="test"
                        n_of_tests={2}
                        onNodePress={onNodePress}
                    />
                </View>
                <Node
                    title="Multiplication by 3"
                    mini_image="https://bafybeibfaug5ryew7uebgr4bx6cl2l55rof4useuhv3f6h3upjo44i2yca.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-3.png"
                    type_="info"
                    n_of_tests={0}
                    onNodePress={onNodePress}
                />
                <View style={styles.row}>
                    <Node
                        title="Multiplication by 2 test"
                        mini_image="https://bafybeienohcvyswpvwaey7czfhig43pwqbqrsmfbaalg6xofdtc552tcdu.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-3-test.png"
                        type_="test"
                        n_of_tests={2}
                        onNodePress={onNodePress}
                    />
                    <Node
                        title="Multiplication by 2 test"
                        mini_image="https://bafybeienohcvyswpvwaey7czfhig43pwqbqrsmfbaalg6xofdtc552tcdu.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-3-test.png"
                        type_="test"
                        n_of_tests={2}
                        onNodePress={onNodePress}
                    />
                </View>
            </View>
        </ImageBackground>
=======
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
>>>>>>> profile_screen
    );
};
export default HomeScreen;
