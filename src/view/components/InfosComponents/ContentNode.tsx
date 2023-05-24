import React from "react";
import { Image, Text, View } from "react-native";


interface ContentNodeProps {
    type: string;
    data: string;
}

export default function ContentNode(props: ContentNodeProps) {

    const _type = props.type;

    if (_type === "text") {
        return (
            <Text
                style={{
                    flex: 1
                }}
            >{props.data}</Text>
        );
    } else if (_type === "image") {
        return (
            <Image
                source={{uri: props.data}}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 10,
                }}
            />
        )
    } else {
        return (
            <View>
                <Text>Unknown type</Text>
            </View>
        )
    }
    
}