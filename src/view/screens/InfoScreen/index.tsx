import {
    View,
    Text,
    TouchableOpacity,
    Button,
    Pressable,
    ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InfoScreen = ({ navigation }: any) => {
    return (
        <ImageBackground
            source={require("../../../../assets/images/bg.png")}
            style={{
                flex: 1,
            }}
        >
            <View style={styles.container}>
                <Text
                    style={{
                        // All caps
                        textTransform: "uppercase",
                        fontSize: 30,
                        fontWeight: "900",
                        color: "#E67B02",
                    }}
                >
                    multiplication by 2
                </Text>
                <View
                    style={{
                        marginTop: 50,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            Table:
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 1 = 2
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 2 = 4
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 3 = 6
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 4 = 8
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 5 = 10
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 6 = 12
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 7 = 14
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 8 = 16
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 9 = 18
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            2 × 10 = 20
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            The basic things to observe in 2 table are:
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            Table of 2 follows the pattern of 2, 4, 6, 8, 0 at
                            one's digit place.
                        </Text>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="circle-small"
                                size={25}
                            />
                            It always has even numbers.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => {
                        // go back
                        navigation.goBack();
                    }}
                >
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={30}
                        color="white"
                    />
                </TouchableOpacity>
                <Pressable
                    style={{
                        backgroundColor: "white",
                        width: 280,
                        height: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.navigate("Tests")}
                >
                    <Text
                        style={{
                            color: "#E67B02",
                            fontWeight: "bold",
                            fontSize: 20,
                        }}
                    >
                        Go to test
                    </Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default InfoScreen;
