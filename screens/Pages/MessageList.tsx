import { ScrollView, Pressable, FlatList, Image, Button, View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon, ListItem } from "react-native-elements";

const list = [
	{
		name: "Amy Farha",
		avatar_url:
			"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
		subtitle: "Vice President",
	},
	{
		name: "Chris Jackson",
		avatar_url:
			"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
		subtitle: "Vice Chairman",
	},
];

export default function MessageList({ navigation }) {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<ListItem style={tw`border-b border-gray-200`}>
				<ListItem.Content>
					<View style={tw`flex-row`}>
						<View style={tw`self-center`}>
							<MaterialCommunityIcons name="account-circle" size={35} />
						</View>
						<View style={tw`pl-2`}>
							<Pressable onPress={() => navigation.navigate("MessagePage")}>
								<ListItem.Title style={tw`font-bold`}>JShop</ListItem.Title>
								<ListItem.Subtitle style={tw`w-60`} numberOfLines={1}>
									Hello Swiper Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Perferendis quia quo molestias, autem in
									temporibus consectetur iste sequi, error minus qui libero
									harum numquam? Accusantium delectus quidem nam officiis quo.
								</ListItem.Subtitle>
							</Pressable>
						</View>
					</View>
				</ListItem.Content>
			</ListItem>
		</ScrollView>
	);
}
