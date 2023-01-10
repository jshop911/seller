import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { Button } from "react-native-paper";
import React from "react";
import tw from "twrnc";
import NotificationData from "../../assets/api/NotificationData";

export default function Notification({ navigation }) {
	return (
		<FlatList
			data={NotificationData}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View
					style={tw`flex flex-row border-b border-gray-300 bg-gray-200 rounded mb-2`}
				>
					<View style={tw`p-2 self-center`}>
						<Avatar
							size={80}
							rounded
							title="P"
							source={{
								uri: item.profileImage,
							}}
						/>
					</View>
					<View>
						{/* For sellers name and time */}
						<View style={tw`flex-row pt-4`}>
							<View style={tw`w-50`}>
								<Text style={tw`text-base font-bold`}>{item.product}</Text>
							</View>
							<View>
								<Text style={tw`text-xs text-gray-600`}>{item.time}</Text>
							</View>
						</View>
						{/* For sellers name and time end */}

						<View style={tw`pb-2`}>
							<Text style={tw`text-sm w-60`}>
								<Text style={tw`font-bold`}>{item.username},</Text> the buyer,
								confirmed. Please allow{" "}
								<Text style={tw`font-bold`}>20 mins</Text> for the buyer to
								arrive at your given address.
							</Text>
						</View>
					</View>
				</View>
			)}
		/>
	);
}
