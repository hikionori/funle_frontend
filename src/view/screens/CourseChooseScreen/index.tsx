import React from "react";
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

    const courses = getAllCourses(token).then((res: any) => {
        return res;
    });

    const prepareCoursesData = (courses: any) => {
        let data: string[][] = [];
        courses.forEach((course: any) => {
            data.push([course.id.$oid, course.title, course.description]);
        });
        return data;
    };

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View>
				<Text>CourseChooseScreen</Text>
			</View>
		</SafeAreaView>
	);
};

export default CourseChooseScreen;
