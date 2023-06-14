import React, { useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ImageBackground,
	ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import useCourse from "../../../logic/main/course_zustand";
import useAuthStore from "../../../logic/auth";
import useUserStore from "../../../logic/main/user_zuzstand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CourseChooseScreen = () => {
	const token = useAuthStore((state: any) => state.token);
	const getAllCourses = useCourse((state: any) => state.getAllCourses);
	const getCourse = useCourse((state: any) => state.getCourse);
	const user = useUserStore((state: any) => state.user);
	const navigation = useNavigation();
	const [courses, setCourses] = React.useState<any[]>([]);

	const onPressHandler = (id: string) => {
		AsyncStorage.setItem("activeCourse", id);
		getCourse(id, token);
		// @ts-ignore
		navigation.navigate("MainScreen")
	};

	useEffect(() => {
		getAllCourses(token).then((res: any) => {
			setCourses(res);
		});
		// prepareData();
		// console.log("courses", courses!);
	}, []);

	return (
		<SafeAreaView>
			<ImageBackground
				source={require("../../../../assets/images/bg-course-choose.png")}
				style={{
					width: "100%",
					height: "100%",
					// // center elements
				}}
			>
				<View
					style={{
						top: "10%",
						paddingLeft: 30,
					}}
				>
					<Text
						style={{
							fontFamily: "MacPawFixelDisplay-Bold",
							fontSize: 32,
						}}
					>
						Раді вас вітати,
					</Text>
					<Text
						style={{
							fontFamily: "MacPawFixelDisplay-Bold",
							fontSize: 32,
						}}
					>
						{user.username}
					</Text>
				</View>
				<View
					style={{
						// from last element + 25
						top: "13%",
						paddingLeft: 30,
					}}
				>
					<Text
						style={{
							fontFamily: "MacPawFixelDisplay-Regular",
							fontSize: 24,
							width: "70%",
						}}
					>
						Оберіть курс, який ви хочете вивчати:
					</Text>
				</View>
				<ScrollView
					style={{
						top: "15%",
						marginHorizontal: 30,

						height: "100%",
					}}
				>
					{courses.map((course) => (
						<TouchableOpacity
							key={course._id.$oid}
							onPress={() => onPressHandler(course._id.$oid)}
						>
							<View
								style={{
									backgroundColor: "#fff",
									height: 59,
									borderRadius: 20,
									borderColor: "#000",
									borderWidth: 1,

									// center elements
									justifyContent: "center",
									paddingHorizontal: 20,
								}}
							>
								<Text
									style={{
										fontFamily: "MacPawFixelDisplay-Regular",
										fontSize: 18,
									}}
								>{course.title}</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default CourseChooseScreen;
