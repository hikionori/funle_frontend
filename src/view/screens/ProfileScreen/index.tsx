import {
	Image,
	ImageBackground, Pressable,
	SafeAreaView,
	ScrollView,
	Text,
	View
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { IconButton, Spacer } from "native-base";
import useAuthStore from "../../../logic/auth";
import useUserStore from "../../../logic/main/user_zuzstand";
import { getInfo } from "../../../repository/info_repository";
import { getTest } from "../../../repository/tests_repository";
import { get_user_info } from "../../../repository/user_repository";

const ProfileScreen = () => {
	const { logout } = useAuthStore((state: any) => ({ logout: state.logout }));
	const navigation = useNavigation();

	const token = useAuthStore((state: any) => state.token);
	const getUser = useUserStore((state: any) => state.getUser);
	const getUserInfo = useUserStore((state: any) => state.getUserInfo);
	const setUser = useUserStore((state: any) => state.setUser);

	const user = getUser();
	// user progress in tests
	const tests: string[] = user.progress!.tests; // id array of tests
	const tests_count: number = tests.length;

	const [tests_titles, setTestsTitles] = React.useState<string[][]>([]); // [[id, title], ...]

	// user progress in infos
	const infos: string[] = user.progress!.infos; // id array of infos
	const infos_count: number = infos.length;

	const [infos_titles, setInfosTitles] = React.useState<string[][]>([]); // [[id, title], ...]

	const [infosVisibility, setInfosVisibility] =
		React.useState<boolean>(false);
	const [testsVisibility, setTestsVisibility] =
		React.useState<boolean>(false);

	const [refresh, setRefresh] = React.useState<boolean>(false);

	const handleInfosVisibility = () => {
		setInfosVisibility(!infosVisibility);
	};

	const handleTestsVisibility = () => {
		setTestsVisibility(!testsVisibility);
	};
	useEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTitle: "Профіль",
			headerRight: () => {
				return (
					<View
						style={{
							flexDirection: "row",
						}}
					>
						<IconButton
							icon={
								<MaterialCommunityIcons
									name="logout"
									size={24}
									color="white"
								/>
							}
							onPress={() => logout()}
						/>
					</View>
				);
			},
			// header style
			headerStyle: {
				backgroundColor: "#E67B02",
				height: 100,
				borderBottomLeftRadius: 20,
				borderBottomRightRadius: 20,
			},
			headerTitleStyle: {
				color: "#fff",
				fontSize: 20,
				fontWeight: "bold",
			},
		});

		setRefresh(!refresh);
	}, [navigation]);

	useEffect(() => {

		get_user_info(token).then((res) => {
			setUser(res);
		});

		let info_temp: string[][] = [];
		for (let i = 0; i < infos_count; i++) {
			getInfo(infos[i], token).then((res) => {
				// console.log(res);
				info_temp.push([infos[i].slice(0, 6), res!.title]);
				// setInfosTitles([...infos_titles, [infos[i].slice(0, 6), res!.title]]);
			});
		}


		// remove duplicates by title, info[1]
		info_temp = info_temp.filter(
			(item, index, self) =>
				index === self.findIndex((t) => t[1] === item[1])
		);
		setInfosTitles(info_temp);

		let test_temp: string[][] = [];
		for (let i = 0; i < tests_count; i++) {
			getTest(tests[i]).then((res) => {
				// console.log(res);
				test_temp.push([tests[i].slice(0, 6), res.question]);
				// setTestsTitles([...tests_titles, [tests[i].slice(0, 6), res.question]]);
			});
		}

		// remove duplicates by title, test[1]
		test_temp = test_temp.filter(
			(item, index, self) =>
				index === self.findIndex((t) => t[1] === item[1])
		);
		setTestsTitles(test_temp);
	}, [refresh]);

	// TODO: test it

	return (
		<SafeAreaView>
			<StatusBar style="light" />
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
				{/* Logo */}
				<Image
					source={require("../../../../assets/images/logoBig.png")}
					style={{
						top: -200,
						width: 210,
						height: 190,
						resizeMode: "contain",
						bottom: 0,
						//! debug
						// display image curner
						// borderRadius: 20,
						// borderColor: "black",
						// borderWidth: 1,
					}}
				/>
				<View
					style={{
						flexDirection: "column",
					}}
				>
					<Text
						style={{
							top: -160,
							color: "#000000",
							fontWeight: "300",
							fontSize: 30,
							fontFamily: "MacPawFixelDisplay-Black",
							textAlign: "center",
						}}
					>
						{user.username}
					</Text>
					<Text
						style={{
							top: -150,
							color: "#4D4D4D",
							fontWeight: "300",
							fontSize: 15,
							fontFamily: "MacPawFixelDisplay-Black",
							textAlign: "center",
						}}
					>
						{user.email}
					</Text>
				</View>
				<Text
					style={{
						top: -140,
						fontFamily: "MacPawFixelDisplay-Black",
						fontSize: 20,
						alignSelf: "flex-start",
						paddingLeft: 60,
					}}
				>
					Ваш прогрес:
				</Text>
				<ScrollView
					style={{
						position: "absolute",
						top: "50%",
						height: 500,
						// borderRadius: 20,
					}}
					contentContainerStyle={{
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						paddingBottom: "80%",
						borderRadius: 20,
					}}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<Pressable
						style={{
							width: 300,
							height: 50,
							backgroundColor: "#E67B02",

							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							borderBottomLeftRadius: infosVisibility ? 0 : 20,
							borderBottomRightRadius: infosVisibility ? 0 : 20,

							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
						onPress={() => handleInfosVisibility()}
					>
						<Text
							style={{
								color: "#fff",
								fontWeight: "300",
								fontSize: 20,
								fontFamily: "MacPawFixelDisplay-Medium",
								paddingLeft: 20,
							}}
						>
							Матеріали
						</Text>
						<MaterialCommunityIcons
							name={`${
								infosVisibility ? "arrow-up" : "arrow-down"
							}`}
							size={24}
							style={{
								paddingRight: 20,
							}}
							color="white"
						/>
					</Pressable>
					<View
						style={{
							width: 300,
							// height: "fit-content",
							height: "auto",
							backgroundColor: "rgba(230, 123, 2, 0.2)",
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20,
							display: infosVisibility ? "flex" : "none",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-around",
							}}
						>
							<Text>ID</Text>
							<Text>Назва</Text>
						</View>
						{infos_titles.map((info: string[], index: number) => {
							return (
								<View
									key={index}
									style={{
										flexDirection: "row",
										height: 30,
										backgroundColor:
											"rgba(230, 123, 2, 0.2)",
										alignItems: "center",
										borderRadius: 20,
										marginVertical: 5,
									}}
								>
									<Text
										style={{
											fontFamily:
												"MacPawFixelDisplay-Medium",
											left: 40,
										}}
									>
										{info[0]}
									</Text>
									<Spacer />
									<Text
										style={{
											fontFamily:
												"MacPawFixelDisplay-Medium",
											right: 40,
										}}
									>
										{info[1]}
									</Text>
								</View>
							);
						})}
					</View>
					<Pressable
						style={{
							width: 300,
							height: 50,
							backgroundColor: "#E67B02",
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,

							borderBottomLeftRadius: testsVisibility ? 0 : 20,
							borderBottomRightRadius: testsVisibility ? 0 : 20,

							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginTop: 20,
						}}
						onPress={() => handleTestsVisibility()}
					>
						<Text
							style={{
								color: "#fff",
								fontWeight: "300",
								paddingLeft: 20,
								fontSize: 20,
								fontFamily: "MacPawFixelDisplay-Medium",
							}}
						>
							Тести
						</Text>
						<MaterialCommunityIcons
							name={`${
								testsVisibility ? "arrow-up" : "arrow-down"
							}`}
							style={{
								paddingRight: 20,
							}}
							size={24}
							color="white"
						/>
					</Pressable>
					<View
						style={{
							width: 300,
							// height: "fit-content",
							height: "auto",
							backgroundColor: "rgba(230, 123, 2, 0.2)",
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20,
							display: testsVisibility ? "flex" : "none",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-around",
							}}
						>
							<Text>ID</Text>
							<Text>Текст завдання</Text>
						</View>
						{tests_titles.map((test: string[], index: number) => {
							return (
								<View
									key={index}
									style={{
										flexDirection: "row",
										height: 30,
										backgroundColor:
											"rgba(230, 123, 2, 0.2)",
										alignItems: "center",
										borderRadius: 20,
										marginVertical: 5,
									}}
								>
									<Text
										style={{
											fontFamily:
												"MacPawFixelDisplay-Medium",
											left: 30,
										}}
									>
										{test[0]}
									</Text>
									<Spacer />
									<Text
										style={{
											fontFamily:
												"MacPawFixelDisplay-Medium",
											right: 40,
										}}
									>
										{test[1]}
									</Text>
								</View>
							);
						})}
					</View>
				</ScrollView>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default ProfileScreen;
