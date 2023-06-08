import { Box, Flex } from "native-base";
import React from "react";
import { useState } from "react";
import Node from "./Node";
import { Text } from "react-native";


interface NodeLevelProps {
    index: number;
    nodes: any;
    onNodeInfoPress: Function;
    onNodeTestPress: Function;
}


export default function NodeLevel(props: NodeLevelProps) {
    return (
        <Box w={"100%"}>
            <Flex direction="row" w={"100%"} alignItems={"center"} justifyContent={"space-evenly"}>
                {props.nodes && props.nodes.map((node: any, index: number) => {
                    return (
                        <Node
                            id={node.id}
                            ids={node?.ids}
                            mini_image={node.mini_image}
                            mini_image_success={node.mini_image_success}
                            title={node.title}
                            type_= {node.type_}
                            key={index}
                            n_of_tests={node.n_of_tests}
                            onNodePress={node.type_ === "info" ? props.onNodeInfoPress : props.onNodeTestPress}
                        />
                    )
                })}
            </Flex>
        </Box>
    )
}