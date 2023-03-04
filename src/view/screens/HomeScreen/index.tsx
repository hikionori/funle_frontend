import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeScreen</Text>
            <Text style={styles.subtitle}>This is the HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
