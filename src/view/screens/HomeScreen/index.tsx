import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import Node from "../../components/CourseComponents/Node";
import NodeLevel from "../../components/CourseComponents/NodeLevel";
import NodeLevelTree from "../../components/CourseComponents/LevelTree";
import useCourse from "../../../logic/main/course_zustand";

const HomeScreen = ({ navigation }: any) => {
  const setLevels = useCourse((state: any) => state.setLevels);

  //! debug only
  const levels = [
    [
      // level
      1, // level index
      [
        // nodes
        {
          // node, info
          id: "1",
          ids: ["1"],
          title: "Multiplication by 2",
          mini_image:
            "https://bafybeic55zrogt3gqr2wxr4nqh7vlobeo7qg7mxrxoidnpaorcosob3dxi.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-2.png",
          type_: "info",
        },
      ],
    ],
    [
      // level
      2, // level index
      [
        // nodes
        {
          // node, test
          id: "2",
          ids: ["2", "3"],
          title: "Multiplication by 2",
          mini_image:
            "https://bafybeidy2qx7ijtup3uqc45tjwemijjidl2oxlcwjy6wzq2hgs5oacrfk4.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-2-test.png",
          type_: "test",
          n_of_tests: 2,
        },
        {
          // node, test
          id: "2",
          ids: ["2", "3"],
          title: "Multiplication by 2",
          mini_image:
            "https://bafybeidy2qx7ijtup3uqc45tjwemijjidl2oxlcwjy6wzq2hgs5oacrfk4.ipfs.w3s.link/%D1%83%D1%80%D0%BE%D0%BA-2-test.png",
          type_: "test",
          n_of_tests: 2,
        },
      ],
    ],
  ];

  useEffect(() => {
	setLevels(levels);
  }, []);

  // TODO: rewrite this
  return (
    <ImageBackground
      source={require("../../../../assets/images/bg.png")}
      style={{
        width: "100%",
        height: "100%",
        // center elements
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        {/* <NodeLevel
          index={nodes[0] as number}
          nodes={nodes[1]}
          onNodePress={onNodePress}
        /> */}
        <NodeLevelTree 
			onNodeInfoPress={() => {
				// TODO: add logic for info
				navigation.navigate("Info");
			}}
			onNodeTestPress={() => {
				// TODO: add logic for test
				navigation.navigate("Tests", {
					id: "2",
					question: "2 * 2 = ?",
					answers: [
						"2", "4", "6", "8"
					],
					answer: "4"
				});
			}}
		/>
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;
