import { View } from "react-native";
import useInfo from "../../../logic/main/info_zustand";
import NodeLevel from "./NodeLevel";
import React from "react";

interface Props {
    content_levels: any;
}


export default function LevelTreeInfo({ content_levels }: Props) {
  return (
    <View
      style={{
        paddingLeft: 15
      }}
    >
      {content_levels &&
        content_levels.map((level: any, index: number) => {
          return <NodeLevel key={index} index={index} nodes={level[1]} />;
        })}
    </View>
  );
}
