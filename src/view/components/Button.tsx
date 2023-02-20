import {
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";
import React from "react";

interface ButtonProps {
    title: string;
    onPress: () => void;
    style: StyleProp<ViewStyle>;
}

const CustomButton = (props: ButtonProps) => {
    return (
        <Pressable onPress={props.onPress} style={props.style}>
            <Text>{props.title}</Text>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({});
