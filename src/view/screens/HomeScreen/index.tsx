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

const HomeScreen = ({ navigation }: any) => {
	// const setLevels = useCourse((state: any) => state.setLevels);

	const token = useAuthStore((state: any) => state.token);

	const getTestsAPI = useTests((state: any) => state.getTestsAPI);
	const getInfo = useInfo((state: any) => state.getInfo);

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
				>
					<NodeLevelTree
						onNodeInfoPress={(ids: string[]) => {
							getInfo(ids, token);
							navigation.navigate("Info");
						}}
						onNodeTestPress={(ids: string[]) => {
							getTestsAPI(ids);
							navigation.navigate("Tests", {
								id: "2",
								question: "2 * 2 = ?",
								answers: ["2", "4", "6", "8"],
								answer: "4",
							});
						}}
					/>
				</ScrollView>
			</ImageBackground>
		</SafeAreaView>
	);
};
export default HomeScreen;
