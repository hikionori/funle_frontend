import {
	View,
	Text,
	TouchableOpacity,
	Button,
	ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";
import useTests from "../../../logic/main/tests_zustand";

// TODO: Add argument 'id'
const TestsScreen = ({ navigation }: any) => {
	// after clicking on the cell, we get the ids from the cell and pass it to useTests hook,
	// next in useTests hook we get all tests by ids, after we pop first test and pass it to the useActiveTest hook,
	// and then we get data from useActiveTest hook and pass it to the TestScreen

	const questions = useTests((state: any) => state.tests);
	const activeTestIndex = useTests((state: any) => state.activeTestIndex);
	const activeTest = questions[activeTestIndex]
		? questions[activeTestIndex]
		: null;
	const progress = useTests((state: any) => state.progress);

    // setters
    const setProgress = useTests((state: any) => state.setProgress);

    const answer = useState(); // value of the answer

    const handleAnswer = () => {
        if (answer === activeTest.answer) {
            // TODO: add test to user progress, change progress bar
        } else {
            // TODO: change progress bar
        }
        // TODO: change active test, and go to the next test
    };

	// TODO: Add more logic
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

        // fill progress array with two 0, 3 1 and 2 undefined
        setProgress([0, 0, 1, 1, 1, undefined, undefined]);

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
				<View style={styles.container}>
					<View style={styles.boxGroup}>
						{ progress.map((item: any, index: number) => {
                            return (
                                <View
                                    key={index}
                                    style={
                                        // if item is 1, then show green box, else if 0 show red box, else show grey box
                                        item === 1 ? (
                                            styles.boxChecked
                                        ) : item === 0 ? (
                                            styles.boxUnchecked
                                        ) : (
                                            styles.box
                                        )
                                    }
                                >
                                    { // if item is 1, then show check icon, else if 0 show cross icon, else show nothing 
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
                        }) }
					</View>
					<View>
						{/* //* Question text **/}
						<Text style={styles.question}>2 × 2 = ?</Text>

						<Text
							style={{
								fontWeight: "bold",
								fontSize: 32,
							}}
						>
							Choose the right option:
						</Text>
						{/* //* Options **/}
						<View style={styles.options}>
							<TouchableOpacity style={styles.option}>
								<MaterialCommunityIcons
									name="circle-outline"
									size={30}
									style={{
										marginLeft: 10,
										marginRight: 10,
									}}
								/>
								<Text style={styles.optionText}>2</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.option}>
								<MaterialCommunityIcons
									name="circle-outline"
									size={30}
									style={{
										marginLeft: 10,
										marginRight: 10,
									}}
								/>
								<Text style={styles.optionText}>4</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.option}>
								<MaterialCommunityIcons
									name="circle-outline"
									size={30}
									style={{
										marginLeft: 10,
										marginRight: 10,
									}}
								/>
								<Text style={styles.optionText}>6</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.option}>
								<MaterialCommunityIcons
									name="circle-outline"
									size={30}
									style={{
										marginLeft: 10,
										marginRight: 10,
									}}
								/>
								<Text style={styles.optionText}>5</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity style={styles.btn}>
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
				</View>
			</View>
		</ImageBackground>
	);
};

export default TestsScreen;
