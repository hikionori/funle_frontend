import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface NodeProps {
    title: string;
    mini_image: string; // url
    type_: string; // "info" | "test"
    n_of_tests?: number; // only if type_ === "test"
    onNodePress?: Function;
}

export default function Node(props: NodeProps) {

    const type_ = props.type_;

    const [route, setRoute] = React.useState<string>("");

    useEffect(() => {
    if (type_ === "test") {
        setRoute("Tests");
    }
    else if (type_ === "info") {
        setRoute("Info");
    }}, [type_]);

    const onClick = () => {
        console.log(route);
    }

    const onClickNode = props.onNodePress;

    return (
        <TouchableOpacity
            onPress={() => {
                onClickNode && onClickNode(route);
            }}
        >
            <View>
                <Image
                    source={{ uri: props.mini_image }}
                    style={{
                        width: 130,
                        height: 130,
                        display: "flex",
                    }}
                />
            </View>
        </TouchableOpacity>
    );
}
