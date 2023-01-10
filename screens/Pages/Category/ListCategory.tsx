import {
	View,
	Text,
	ScrollView,
	Pressable,
	FlatList,
	Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { AirbnbRating } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListOfCategory from "../../../assets/api/ListOfCategory";

export default function ListCategory({ navigation }) {
	return (
		<View style={tw`p-2`}>
			<Text style={tw`text-lg font-bold text-gray-800`}>#Random Metal</Text>
			<View style={tw`flex items-center self-center pt-4 pb-14`}>
				<FlatList
					data={ListOfCategory}
					keyExtractor={(item) => item.id}
					numColumns={2}
					renderItem={({ item }) => (
						<View style={tw`flex-row p-2`}>
							<View style={tw`bg-gray-200 w-40 p-2 rounded shadow-md`}>
								<Pressable onPress={() => navigation.navigate("ProductDetail")}>
									<Image
										style={tw`w-36 h-35 rounded px-2 border-solid border-2 border-gray-400`}
										source={{
											uri: item.productImage,
										}}
									/>
								</Pressable>
								<Text style={tw`text-sm text-gray-700 text-center font-bold`}>
									{item.product}
								</Text>
								<View style={tw`flex-row items-center`}>
									<Text style={tw`text-xs text-gray-600 font-bold`}>
										Deal Price:
									</Text>
									<Text style={tw`text-base text-[#faac2a] font-bold ml-5`}>
										{item.price} Php
									</Text>
								</View>

								<View style={tw`flex-row text-justify`}>
									<Text style={tw`text-xs text-gray-600 font-bold`}>
										Ratings:{" "}
									</Text>
									<AirbnbRating
										count={item.rating}
										reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
										reviewSize={14}
										defaultRating={item.rating}
										background-fill-color="#e5e7eb"
										fill-color="#faac2a"
										size={10}
										showRating={false}
									/>
								</View>

								<View style={tw`flex-row items-center pt-2`}>
									<MaterialCommunityIcons
										name="store-marker-outline"
										size={20}
										color={"#223447"}
									/>
									<Text
										style={tw`text-xs text-gray-500 font-bold pl-2 w-35 h-12`}
									>
										{item.location}
									</Text>
								</View>

								<Pressable onPress={() => navigation.navigate("SellNow")}>
									<View style={tw`p-2 mt-2 bg-[#faac2a] rounded shadow-md`}>
										<Text
											style={tw`text-sm text-center text-gray-900 font-bold`}
										>
											Sell Now
										</Text>
									</View>
								</Pressable>
							</View>
						</View>
					)}
				/>
			</View>
		</View>
	);
}
