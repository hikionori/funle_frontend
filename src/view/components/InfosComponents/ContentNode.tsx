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
                    flex: 1,
                    fontSize: 18,
                    fontFamily: "MacPawFixel-VF",
                    fontWeight: "800",
                    fontStyle: "normal",
                    lineHeight: 28,
                    fontVariant: ["small-caps"],
                    //@ts-ignore
                    fontFeatureSettings: "'ss01' on, 'salt' on, 'ordn' on",
                    color: "#3C3C3C",
                    
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