import { Flex } from "native-base";

import React from "react";
import useCourse from "../../../logic/main/course_zustand";
import NodeLevel from "./NodeLevel";

interface NodeLevelTreeProps {
  onNodeInfoPress: Function;
  onNodeTestPress: Function;
}

export default function NodeLevelTree(props: NodeLevelTreeProps) {
  const levels = useCourse((state: any) => state.levels);
  //   const onNodePress = useCourse((state: any) => state.onNodePress);

  return (
    <Flex flexDirection={"column"}>
      {levels &&
        levels.map((level: any, index: number) => {
          return (
            <NodeLevel
              index={level[0]}
              nodes={level[1]}
              key={index}
              onNodeInfoPress={props.onNodeInfoPress}
              onNodeTestPress={props.onNodeTestPress}
            />
          );
        })}
    </Flex>
  );
}
