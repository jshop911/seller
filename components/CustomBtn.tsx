import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";

export default function CustomBtn({ onPress, text }) {
	return (
		<View style={tw`bg-[#faac2a] h-12 w-full rounded my-2`}>
			<TouchableOpacity onPress={onPress} style={tw`pl-4`}>
				<View style={tw`flex-row`}>
					<Text style={tw`text-base text-[#223447] py-3 font-bold`}>
						{text}
					</Text>
					<MaterialCommunityIcons
						name={"arrow-collapse-right"}
						size={23}
						color={"#223447"}
						style={tw`ml-auto mr-4 pt-3`}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}
