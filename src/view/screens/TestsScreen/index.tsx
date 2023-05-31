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

const TestsScreen = ({ navigation }: any) => {
	// after clicking on the cell, we get the ids from the cell and pass it to useTests hook,
	// next in useTests hook we get all tests by ids, after we pop first test and pass it to the useActiveTest hook,
	// and then we get data from useActiveTest hook and pass it to the TestScreen

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
							<Text style={styles.question}>
								{activeTest && activeTest.question}
							</Text>

							<Text
								style={{
									fontWeight: "bold",
									fontSize: 32,
								}}
							>
								Choose the right option:
							</Text>
							{/* //* Options **/}
							{activeTest && activeTest.level === 1 ? (
								<View style={styles.options}>
									{activeTest.answers.map(
										(item: any, index: number) => {
											return (
												<Option
													key={index}
													label={item}
													value={item}
													onPress={setAnswer}
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
														placeholder="Enter action"
														value={item}
														backgroundColor={"#fff"}
														borderRadius={10}
														padding={3}
														borderColor={"gray.700"}
														focusOutlineColor={
															"#E67B02"
														}
														onChangeText={(
															text
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

							let t_answer = activeTest && activeTest.level === 1 ? answer : actions[actions.length - 1];

							let res: TestState = answerHandler(t_answer, user_id, token);
							if (res === TestState.Next) {
								navigation.navigate("Tests")
							}
							// if res is TestState.Stop, navigate to MainScreen
							if (res === TestState.Stop) {
								navigation.navigate("MainScreen");
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
							Answer
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ ...styles.btn,
							display: activeTest && activeTest.level === 2 ? "flex" : "none",
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
							Add action
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
};

export default TestsScreen;
