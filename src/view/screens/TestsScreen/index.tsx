import {
    View,
    Text,
    TouchableOpacity,
    Button,
    ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";
import { useActiveTest, useTests } from "../../../logic/main/tests_zustand";

// TODO: Add argument 'id'
const TestsScreen = ({ route, navigation }: any) => {
    // after clicking on the cell, we get the ids from the cell and pass it to useTests hook, 
    // next in useTests hook we get all tests by ids, after we pop first test and pass it to the useActiveTest hook, 
    // and then we get data from useActiveTest hook and pass it to the TestScreen
    const {id, question, answers, answer} = route.params;

    // TODO: Add more logic
    useEffect(() => {
        //* no functional block
        navigation.setOptions({
            headerLeft: () => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            // go back
                            navigation.navigate("MainScreen");
                        }}
                    >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            ),
        });
        //*
    }, []);

    return (
        <ImageBackground
            source={require("../../../../assets/images/bg.png")}
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    height: "100%",
                }}
            >
                <View style={styles.container}>
                    <View style={styles.boxGroup}>
                        <View style={styles.box && styles.boxChecked}>
                            <MaterialCommunityIcons
                                name="check-bold"
                                size={19}
                                color={"black"}
                            />
                        </View>
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                        <View style={styles.box} />
                    </View>
                    <View>
                        {/* //* Question text **/ }
                        <Text style={styles.question}>2 × 2 = ?</Text>

                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 32,
                            }}
                        >
                            Choose the right option:
                        </Text>
                        <View style={styles.options}>
                            <TouchableOpacity style={styles.option}>
                                <MaterialCommunityIcons
                                    name="circle-outline"
                                    size={30}
                                    style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}
                                />
                                <Text style={styles.optionText}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option}>
                                <MaterialCommunityIcons
                                    name="circle-outline"
                                    size={30}
                                    style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}
                                />
                                <Text style={styles.optionText}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option}>
                                <MaterialCommunityIcons
                                    name="circle-outline"
                                    size={30}
                                    style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}
                                />
                                <Text style={styles.optionText}>6</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option}>
                                <MaterialCommunityIcons
                                    name="circle-outline"
                                    size={30}
                                    style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}
                                />
                                <Text style={styles.optionText}>5</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >
                            Answer
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default TestsScreen;