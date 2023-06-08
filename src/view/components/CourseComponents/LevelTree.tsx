import { Flex } from "native-base";

import React from "react";
import useCourse from "../../../logic/main/course_zustand";
import NodeLevel from "./NodeLevel";
import useUserStore from "../../../logic/main/user_zuzstand";

import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "../../../logic/auth";

interface NodeLevelTreeProps {
	onNodeInfoPress: Function;
	onNodeTestPress: Function;
}

export default function NodeLevelTree(props: NodeLevelTreeProps) {
	const [course_id, setCourse_id] = React.useState<string | null>(null);

	const levels = useCourse((state: any) => state.levels);
	const user = useUserStore((state: any) => state.user);
  const token = useAuthStore((state: any) => state.token);
	const getCourse = useCourse((state: any) => state.getCourse);

	React.useEffect(() => {
		AsyncStorage.getItem("activeCourse").then((value) => {
			if (value) {
				setCourse_id(value);
				getCourse(value, token);
			}
		});
	}, [user]);

	return (
		<Flex flexDirection={"column"}>
			{levels &&
				levels.map((level: any, index: number) => {
					return (
						<NodeLevel
							index={level[0]}
							nodes={level[1]}
							key={index}
							onNodeInfoPress={props.onNodeInfoPress}
							onNodeTestPress={props.onNodeTestPress}
						/>
					);
				})}
		</Flex>
	);
}
