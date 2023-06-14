import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ImageBackground,
} from "react-native";
import useTests from "../../../logic/main/tests_zustand";
import { useNavigation } from "@react-navigation/native";
import useUserStore from "../../../logic/main/user_zuzstand";
import useAuthStore from "../../../logic/auth";

const AfterTestsScreen = ({route, navigation}: any) => {
	const node_id = route.params; // test it

	const token = useAuthStore((state: any) => state.token);
	const progress: Array<any> = useTests((state: any) => state.progress);
	const reset = useTests((state: any) => state.reset);
	const addNodeToProgress = useUserStore((state: any) => state.addNodeToProgress);

	const navigator = useNavigation();

	const [state, setState] = useState<number>(); // 1 - all is good, 2 - something is wrong, 3 - something is wrong, app error

	useEffect(() => {
		if (progress.every((item: any) => item === 1)) {
			setState(1);
		} else if (progress.some((item: any) => item === 0)) {
			setState(2);
		} else {
			setState(3);
		}
	}, []);

	return (
		<SafeAreaView>
			<ImageBackground
				source={
					state === 1
						? require("../../../../assets/images/bg-ok.png")
						: state === 2
						? require("../../../../assets/images/bg-err.png")
						: require("../../../../assets/images/bg-warn.png")
				}
				style={{
					width: "100%",
					height: "100%",
					// center elements
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<View
					style={{
						top: 165,
                        // center
                        alignItems: "center",
					}}
				>
					<Image
						source={
							state === 1
								? require("../../../../assets/images/all-right.png")
								: state === 2
								? require("../../../../assets/images/something-wrong.png")
								: require("../../../../assets/images/app-error.png")
						}
						style={{
							width: 172,
							height: 170,
                            marginBottom: 20,
						}}
					/>
					<View>
						<Text
                            style={{
                                fontSize: 32,
                                fontFamily: "MacPawFixelDisplay-Black",
                                marginBottom: 20,
                                textAlign: "center",
                            }}
                        >
							{state === 1
								? "Ти все пройшов!!"
								: state === 2
								? "Нажаль ти не пройшов всі тести"
								: "Ой..ю\nЩось пішло не так"}
						</Text>
					</View>
					<View>
						<Text
                            style={{
                                fontSize: 20,
                                fontFamily: "MacPawFixelDisplay-Regular",
                                textAlign: "center",
                            }}
                        >
							{state === 1
								? "Тепер можна йти далі"
								: state === 2
								? "Спробуй ще.\nМи віримо в тебе все вийде"
								: "Спробуй ще раз трохи пізніше"}
						</Text>
					</View>
				</View>
				<View
					style={{
						// footer
						flex: 1,
						justifyContent: "flex-end",
						marginBottom: 36,
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor:
								state === 1
									? "#00BFA6"
									: state === 2
									? "#FF5252"
									: "#FFC107",
							paddingVertical: 12,
							paddingHorizontal: 24,
							borderRadius: 24,
						}}
						onPress={() => {
							// @ts-ignore
							navigator.navigate("MainScreen");
                            reset();
							state === 1 && addNodeToProgress(node_id.id, token);
						}}
					>
						<Text
                            style={{
                                fontSize: 20,
                                fontFamily: "MacPawFixelDisplay-Bold",
                                color: "#fff",
                            }}
                        >На головний екран</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default AfterTestsScreen;
