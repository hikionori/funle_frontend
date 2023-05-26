import React, { useEffect } from 'react';
import { View } from 'react-native';
import ContentNode from './ContentNode';


interface NodeLevelProps {
    index: number;
    nodes: any;
}

export default function NodeLevel(props: NodeLevelProps) {

    const [nodes, setNodes] = React.useState(props.nodes);

    useEffect(() => {
        setNodes(props.nodes);
    }, []);

    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",

            marginVertical: 10,
            marginHorizontal: 10,
        }}>
            {props.nodes && props.nodes.map((node: any, index: number) => {
                return (
                    <ContentNode
                        key={index}
                        type={node.content_type}
                        data={node.data}
                    />
                )
            })}
        </View>
    );
}