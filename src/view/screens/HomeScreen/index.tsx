import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import Node from "../../components/CourseComponents/Node";
import NodeLevel from "../../components/CourseComponents/NodeLevel";
import NodeLevelTree from "../../components/CourseComponents/LevelTree";
import useCourse from "../../../logic/main/course_zustand";
import useTests from "../../../logic/main/tests_zustand";
import { StatusBar } from "expo-status-bar";
import useInfo from "../../../logic/main/info_zustand";
import useAuthStore from "../../../logic/auth";
import { ScrollView } from "native-base";
import useUserStore from "../../../logic/main/user_zuzstand";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }: any) => {
	// const setLevels = useCourse((state: any) => state.setLevels);

	const token = useAuthStore((state: any) => state.token);
	const activeCourseId = AsyncStorage.getItem("activeCourse");

	const getCourse = useCourse((state: any) => state.getCourse);

	const getTestsAPI = useTests((state: any) => state.getTestsAPI);
	const getInfo = useInfo((state: any) => state.getInfo);
	const getUserInfo = useUserStore((state: any) => state.getUserInfo);
	const isFocused = useIsFocused();

	useEffect(() => {
		getUserInfo(token);		
	}, [isFocused]);

	return (
		<SafeAreaView>
			<StatusBar style="auto" />
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
				<ScrollView
					contentContainerStyle={{
						paddingTop: 100,
						paddingBottom: 70,
					}}
					showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
				>
					<NodeLevelTree
						onNodeInfoPress={(ids: string[], id: string) => {
							getInfo(ids, token);
							navigation.navigate("Info", {id});
						}}
						onNodeTestPress={(ids: string[], id: string) => {
							getTestsAPI(ids);
							navigation.navigate("Tests", {id});
						}}
					/>
				</ScrollView>
			</ImageBackground>
		</SafeAreaView>
	);
};
export default HomeScreen;
