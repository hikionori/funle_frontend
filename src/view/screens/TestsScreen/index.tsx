import {
	View,
	Text,
	TouchableOpacity,
	Button,
	ImageBackground,
	Keyboard,
	ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";
import useTests, { TestState } from "../../../logic/main/tests_zustand";
import Option from "../../components/TestsComponents/option";
import { TextArea, TextField } from "native-base";
import useUserStore from "../../../logic/main/user_zuzstand";
import useAuthStore from "../../../logic/auth";
import sha256 from "crypto-js/sha256";

const TestsScreen = ({ route, navigation }: any) => {
	const node_id = route.params; // test it

	const questions = useTests((state: any) => state.tests);
	const activeTestIndex = useTests((state: any) => state.activeTestIndex);
	const activeTest = questions[activeTestIndex];
	const progress = useTests((state: any) => state.progress);

	const user = useUserStore((state: any) => state.user);
	const user_id: string = user._id.$oid;

	const token = useAuthStore((state: any) => state.token);

	// setters
	const setProgress = useTests((state: any) => state.setProgress);
	const { answerHandler } = useTests((state: any) => ({
		answerHandler: state.answer,
	}));

	const [answer, setAnswer] = useState(""); // value of the answer
	const [actions, setActions] = useState<string[]>([]); // array of actions [action1, action2, ...] if activeTest.level === 2
	const [isSelected, setIsSelected] = useState<boolean>(false);

	const [keyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", () => {
			setKeyboardVisible(true);
		});
		Keyboard.addListener("keyboardDidHide", () => {
			setKeyboardVisible(false);
		});
	}, []);

	//! debug
	// useEffect(() => {
	// 	console.log("user_id", user_id);
	// }, []);

	useEffect(() => {
		//* no functional block
		navigation.setOptions({
			headerLeft: () => (
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							// go back
							navigation.navigate("MainScreen");
						}}
					>
						<MaterialCommunityIcons
							name="arrow-left"
							size={30}
							color="white"
						/>
					</TouchableOpacity>
				</View>
			),
		});
		//*
		//! debug
		// fill progress array with two 0, 3 1 and 2 undefined
		// setProgress([]);
	}, []);

	return (
		<ImageBackground
			source={require("../../../../assets/images/bg.png")}
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					height: "100%",
				}}
			>
				<ScrollView
					contentContainerStyle={{
						paddingBottom: 60,
					}}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.container}>
						<View style={styles.boxGroup}>
							{progress.map((item: any, index: number) => {
								return (
									<View
										key={index}
										style={
											// if item is 1, then show green box, else if 0 show red box, else show grey box
											item === 1
												? styles.boxChecked
												: item === 0
												? styles.boxUnchecked
												: styles.box
										}
									>
										{
											// if item is 1, then show check icon, else if 0 show cross icon, else show nothing
											item === 1 ? (
												<MaterialCommunityIcons
													name="check"
													size={15}
													color="white"
												/>
											) : item === 0 ? (
												<MaterialCommunityIcons
													name="close"
													size={15}
													color="white"
												/>
											) : null
										}
									</View>
								);
							})}
						</View>
						<View>
							{/* //* Question text **/}
							<Text style={{ ...styles.question, fontSize: activeTest && activeTest.question.length > 20 ? 30 : 40 }}>
								{activeTest && activeTest.question}
							</Text>

							<Text
								style={{
									fontWeight: "bold",
									fontSize: activeTest && activeTest.question.length > 20 ? 26 : 32,
								}}
							>
								Оберіть правильну відповідь:
							</Text>
							{/* //* Options **/}
							{activeTest && activeTest.level === 1 ? (
								<View style={styles.options}>
									{activeTest.answers.map(
										(item: string, index: number) => {
											return (
												<Option
													key={sha256(item + index)
														.toString()
														.slice(0, 20)}
													label={item}
													value={item}
													onPress={setAnswer}
													isSelected={isSelected}
												/>
											);
										}
									)}
								</View>
							) : activeTest && activeTest.level === 2 ? (
								<View style={styles.options}>
									{actions.length !== 0 ? (
										actions.map(
											(item: any, index: number) => {
												return (
													// @ts-ignore
													<TextField
														key={index}
														placeholder="Введіть дію"
														value={item}
														backgroundColor={"#fff"}
														borderRadius={10}
														padding={3}
														borderColor={"gray.700"}
														focusOutlineColor={
															"#E67B02"
														}
														onChangeText={(
															text: string
														) => {
															let temp = [
																...actions,
															] as string[];
															temp[index] = text;
															setActions(temp);
														}}
														onFocus={() => {
															setKeyboardVisible(
																true
															);
														}}
														onClose={() => {
															setKeyboardVisible(
																false
															);
														}}
													/>
												);
											}
										)
									) : (
										<View
											style={{
												alignSelf: "center",
												alignItems: "center",
											}}
										>
											<Text
												style={{
													color: "#000",
												}}
											>
												Додайте нову дію, щоб відповісти
												на питання
											</Text>
										</View>
									)}
								</View>
							) : null}
						</View>
					</View>
				</ScrollView>
				<View
					style={{
						...styles.footer,
						display: keyboardVisible ? "none" : "flex",
					}}
				>
					<TouchableOpacity
						style={{
							...styles.btn,
							backgroundColor: "#00BFA6",
						}}
						onPress={() => {
							let t_answer =
								activeTest && activeTest.level === 1
									? answer
									: actions[actions.length - 1];

							let res: TestState = answerHandler(
								t_answer,
								user_id,
								token
							);
							// clear options
							setAnswer("");
							setActions([]);
							setIsSelected(false);

							// if res is TestState.Stop, navigate to MainScreen
							if (res === TestState.Stop) {
								navigation.navigate("AfterTests", {
									id: node_id.id,
								});
							}
						}}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 20,
							}}
						>
							Відповісти
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							...styles.btn,
							display:
								activeTest && activeTest.level === 2
									? "flex"
									: "none",
						}}
						onPress={() => {
							// add new action
							let temp = [...actions] as string[];
							temp.push("");
							setActions(temp);
						}}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 20,
							}}
						>
							<MaterialCommunityIcons
								name="plus"
								size={25}
								color="white"
							/>
							Додати дію
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
};

export default TestsScreen;
