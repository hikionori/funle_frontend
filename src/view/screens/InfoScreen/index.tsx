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

const InfoScreen = ({ navigation }: any) => {
  const title = useInfo((state: any) => state.title);
  const content_levels = useInfo((state: any) => state.content_levels);

  const {setTitle, setContentLevels} = useInfo((state: any) => ({setTitle: state.setTitle, setContentLevels: state.setContentLevels}));

  //! debug only
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

  useEffect(() => {
    setTitle("Hello");
    setContentLevels(static_content_levels);
  }, []);

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
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <LevelTreeInfo content_levels={content_levels} />
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
