import React, { useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import useCourse from "../../../logic/main/course_zustand";
import useAuthStore from "../../../logic/auth";

const CourseChooseScreen = () => {
	const token = useAuthStore((state: any) => state.token);
	const getAllCourses = useCourse((state: any) => state.getAllCourses);

	// const courses: any[] = getAllCourses(token).then((res: any) => {
	// 	return res;
	// });

	// const prepareCoursesData = (courses: any) => {
	// 	let data: string[][] = [];
	// 	for (let i = 0; i < courses.length; i++) {
	// 		data.push([
	// 			courses[i].id.$oid,
	// 			courses[i].title,
	// 			courses[i].description,
	// 		]);
	// 	}
	// 	return data;
	// };

	// const coursesData: string[][] = prepareCoursesData(courses);

    // useEffect(() => {
    //     console.log(coursesData);
    // }, []);

	return (
		<SafeAreaView>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
			</View>
		</SafeAreaView>
	);
};

export default CourseChooseScreen;
