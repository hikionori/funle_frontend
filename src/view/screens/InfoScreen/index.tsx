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
import useUserStore from "../../../logic/main/user_zuzstand";
import useAuthStore from "../../../logic/auth";

const InfoScreen = ({ navigation }: any) => {
  const id = useInfo((state: any) => state.id);
  const title = useInfo((state: any) => state.title);
  const content_levels = useInfo((state: any) => state.content_levels);

  const token = useAuthStore((state: any) => state.token);

  const addInfoToProgress = useUserStore((state: any) => state.addInfoToProgress);
  

  const handleScroll = (event: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height;
    if (isEndReached) {
      addInfoToProgress(id, token);
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
