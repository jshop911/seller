import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
	View,
	Text,
	ScrollView,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import SellStatus from "../../assets/api/SellStatus";

export default function SellConfirmation({ navigation }) {
	return (
		<>
			<View
				style={tw`flex-row border-b border-gray-300 px-2 pt-8 pb-4 bg-[#faac2a]`}
			>
				<View style={tw`flex-row w-75`}>
					<MaterialCommunityIcons
						name="bookmark"
						size={28}
						color={"green"}
						style={tw`self-center`}
					/>
					<Text style={tw`self-center text-xl font-bold text-gray-100 py-2`}>
						Status
					</Text>
				</View>
				<View style={tw`self-center`}>
					<TouchableOpacity onPress={() => navigation.navigate("Home")}>
						<MaterialCommunityIcons
							name="home"
							size={28}
							color={"green"}
							style={tw`self-center`}
						/>
					</TouchableOpacity>
				</View>
			</View>

			<View style={tw`p-2`}>
				{/* Items to be sold */}
				<View style={tw`mt-2`}>
					<FlatList
						data={SellStatus}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<>
								<View style={tw`my-2 bg-gray-200 rounded flex-row`}>
									<View style={tw`p-2`}>
										<Image
											source={{
												uri: item.productImage,
											}}
											style={tw`w-20 h-30 p-2 rounded`}
										/>
									</View>
									<View style={tw`pt-2 w-35 border-r border-gray-300`}>
										<Text style={tw`text-base font-bold`}>{item.product}</Text>
										<Text style={tw`text-[#223447] font-bold underline`}>
											{item.username}
										</Text>
										<View style={tw`flex-row items-center`}>
											<Text style={tw`text-xs text-gray-600 font-bold`}>
												Deal Price:
											</Text>
											<Text style={tw`text-gray-600 font-bold`}>
												{item.price} Php / kg
											</Text>
										</View>
										<View style={tw`flex-row items-center`}>
											<Text style={tw`text-xs text-gray-600 font-bold`}>
												Kg sold:
											</Text>
											<Text style={tw`text-sm text-gray-600 font-bold`}>
												{" "}
												{item.sold} kg
											</Text>
										</View>
										<View style={tw`flex-row items-center`}>
											<Text style={tw`text-xs text-gray-600 font-bold`}>
												Total Price:
											</Text>
											<Text style={tw`text-sm text-red-500 font-bold`}>
												{" "}
												{item.sold * item.price} kg
											</Text>
										</View>
									</View>
									{/* Buyers confirmation */}
									<View style={tw`self-center p-2 w-25`}>
										<Text style={tw`font-bold`}>Status:</Text>
										<Text style={tw`text-sm text-green-500`}>
											{item.status}
										</Text>
										<Text style={tw`text-xs`}>{item.date}</Text>
									</View>
								</View>
							</>
						)}
					/>
				</View>
			</View>
		</>
	);
}
