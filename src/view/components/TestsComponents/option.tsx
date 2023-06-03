import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface OptionProps {
	label: string;
	value: string;
	onPress: Function;
	isSelected: boolean;
}

const Option = ({ label, value, onPress, isSelected }: OptionProps) => {
	const [selected, setSelected] = useState(isSelected);
	const handlePress = () => {
		setSelected(!selected);
		if (!selected) {
            onPress(value);
			setSelected(!selected);
        } else {
            onPress("");
			setSelected(!selected);
        }
	};

	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				alignContent: "center",
				backgroundColor: "#d0cfce",
				padding: 10,
				borderRadius: 15,
                marginVertical: 5,
			}}
		>
			<TouchableOpacity onPress={handlePress}>
				<View
					style={{
						width: 30,
						height: 30,
						borderRadius: 15,
						borderWidth: 2,
						borderColor: "black",
						marginRight: 10,
						backgroundColor: selected ? "black" : "white",

                        justifyContent: "center",
                        alignItems: "center",
					}}
				>
					{
						// if selected is true, show the check icon
						selected ? (
							<MaterialCommunityIcons
								name="check"
								size={20}
								color="white"
							/>
						) : null
					}
				</View>
			</TouchableOpacity>
			<Text>{label}</Text>
		</View>
	);
};

export default Option;
