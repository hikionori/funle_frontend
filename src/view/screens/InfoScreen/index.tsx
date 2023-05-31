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
  

  const handleScroll = (event: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height;
    if (isEndReached) {
      // TODO: add to user progress
      console.log("End reached");
    }
  }

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
          paddingTop: 30,
          paddingBottom: 50,
        }}
        onScroll={handleScroll}
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
            navigation.navigate("MainScreen");
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default InfoScreen;
