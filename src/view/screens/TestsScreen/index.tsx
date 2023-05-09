import { View, Text, TouchableOpacity, Button } from "react-native";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";

const TestsScreen = ({ navigation }: any) => {
    useEffect(() => {
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
                            navigation.goBack();
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
    }, []);

    return (
        <View
            style={{
                height: "100%",
            }}
        >
            <View style={styles.container}>
                <View style={styles.boxGroup}>
                    <View style={styles.box && styles.boxChecked}>
                        <MaterialCommunityIcons name="check-bold" size={19} color={"black"} />
                    </View>
                    <View style={styles.box} />
                    <View style={styles.box} />
                    <View style={styles.box} />
                    <View style={styles.box} />
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
    );
};

export default TestsScreen;
