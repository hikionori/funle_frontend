import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ProfileScreen</Text>
            <Text style={styles.subtitle}>This is the ProfileScreen</Text>
        </View>
    );
};

export default ProfileScreen;
