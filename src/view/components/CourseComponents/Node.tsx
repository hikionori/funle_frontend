import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import useUserStore from "../../../logic/main/user_zuzstand";

interface NodeProps {
  id: string;
  ids: string[]; // only if type_ === "test"
  title: string;
  mini_image: string; // url
  mini_image_success: string; // url
  type_: string; // "info" | "test"
  n_of_tests?: number; // only if type_ === "test"
  onNodePress: Function;
}

export default function Node(props: NodeProps) {
  const id = props.id;
  const user_nodes: string[] = useUserStore((state: any) => state.user.progress.nodes);

  const isCompleted = user_nodes.includes(id);
  
  const type_ = props.type_;

  const [route, setRoute] = React.useState<string>("");

  useEffect(() => {
    if (type_ === "test") {
      setRoute("Tests");
    } else if (type_ === "info") {
      setRoute("Info");
    }
  }, [type_]);

  const onClick = () => {
    console.log(route);
  };

  const onClickNode = props.onNodePress;

  return (
    <TouchableOpacity
      onPress={() => {
        onClickNode && onClickNode(props.ids);
      }}
    >
      <View>
        <Image
          source={{ uri: isCompleted ? props.mini_image_success : props.mini_image }}
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
