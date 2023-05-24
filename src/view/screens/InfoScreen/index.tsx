import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useInfo from "../../../logic/main/info_zustand";
import ContentNode from "../../components/InfosComponents/ContentNode";
import NodeLevel from "../../components/InfosComponents/NodeLevel";
import LevelTreeInfo from "../../components/InfosComponents/LevelTree";

const InfoScreen = ({ route, navigation }: any) => {
  // FIXME: Странно но с useState не работает
  const static_content_levels = [
    [
      0,
      [
        {
          content_type: "text",
          data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          content_type: "image",
          data: "https://picsum.photos/200/300",
        },
      ],
    ],
    [
      1,
      [
        {
          content_type: "text",
          data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.`,
        },
        {
          content_type: "image",
          data: "https://picsum.photos/200/300",
        },
      ],
    ],
  ];

  // TODO: Add logic
  return (
    <ImageBackground
      source={require("../../../../assets/images/bg.png")}
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello world</Text>
        </View>
        {/* <NodeLevel index={0} nodes={content_levels[0][1]} />
        <NodeLevel index={1} nodes={content_levels[1][1]} />
        <NodeLevel index={0} nodes={content_levels[0][1]} />
        <NodeLevel index={0} nodes={content_levels[0][1]} />
        <NodeLevel index={0} nodes={content_levels[1][1]} />
        <NodeLevel index={0} nodes={content_levels[0][1]} />
         */}
        <LevelTreeInfo content_levels={static_content_levels} />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            // go back
            navigation.goBack();
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default InfoScreen;
