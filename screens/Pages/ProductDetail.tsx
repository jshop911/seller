import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
import React from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";

const ProductDetail = ({ navigation }) => {
	return (
		<>
			<ScrollView showsVerticalScrollIndicator={false} style={tw`bg-[#ffffff]`}>
				<Image
					style={tw`flex self-center w-full h-70`}
					source={{
						uri: "https://thumbs.dreamstime.com/b/random-metal-parts-6380343.jpg",
					}}
				/>
				<View style={tw`p-4`}>
					<View style={tw`flex-row pb-2 border-b border-gray-200`}>
						<Text style={tw`text-3xl text-red-700 font-bold`}>Price Deal:</Text>
						<Text style={tw`text-3xl text-[#faac2a] pl-5 font-bold`}>
							Php 10/kg
						</Text>
					</View>
					<Text style={tw`text-xl text-[#223447] font-bold`}>Random Metal</Text>
					<Text style={tw`text-sm text-justify`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam
						unde aut laboriosam ea adipisci doloremque. Placeat unde
						necessitatibus sapiente dignissimos voluptatum similique fuga quasi.
						Ducimus commodi sapiente id? Molestias! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Iste quam unde aut laboriosam ea
						adipisci doloremque. Placeat unde necessitatibus sapiente
						dignissimos voluptatum similique fuga quasi. Ducimus commodi
						sapiente id? Molestias!
					</Text>
				</View>

				<View style={tw`flex-row items-center pl-3 pb-4 text-[#faac2a]`}>
					<Text style={tw`text-lg text-gray-600 font-bold`}>Ratings: </Text>
					<AirbnbRating
						count={5}
						reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
						reviewSize={14}
						defaultRating={5}
						background-fill-color="#e5e7eb"
						fill-color="#faac2a"
						size={10}
						showRating={false}
					/>
				</View>
			</ScrollView>
			<View style={tw`flex-row self-start w-full p-2 bg-gray-100`}>
				<Image
					source={{
						uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAi1_6yGhUnU-y3n67_jHqQHlk02DE9MMAdKYj11g0nFWJToV8oN8PQWlgc0W20vQ6Gw&usqp=CAU",
					}}
					style={tw`w-10 h-10 rounded-full`}
				/>
				<View style={tw`pl-3`}>
					<Text style={tw`text-lg text-[#223447] font-bold`}>
						Andres Bonifacio
					</Text>
					<Text style={tw`text-xs text-green-400`}>
						<MaterialCommunityIcons
							name="check-decagram"
							size={16}
							color="green"
							style={tw`pr-2`}
						/>
						Verified Buyer
					</Text>
				</View>
				<TouchableOpacity>
					<View style={tw`flex-row items-center pl-20 py-4`}>
						<MaterialCommunityIcons
							name="store"
							size={35}
							color="#faac2a"
							style={tw`pr-2`}
						/>
						<Text style={tw`text-sm text-[#223447] font-bold`}>View Shop</Text>
					</View>
				</TouchableOpacity>
			</View>

			<View style={tw`bg-gray-50 flex-row`}>
				<TouchableOpacity onPress={() => navigation.navigate("MessagePage")}>
					<View style={tw`flex-row w-52 py-4 pl-2`}>
						<MaterialCommunityIcons
							name="phone"
							size={24}
							color="#faac2a"
							style={tw`pr-2`}
						/>
						<Text style={tw`text-base text-[#223447] font-bold`}>
							Contact Seller
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("SellNow")}>
					<View style={tw`flex-row items-end w-52 py-4 pl-4 bg-[#faac2a]`}>
						<MaterialCommunityIcons
							name="cart-arrow-up"
							size={24}
							color="#fff"
							style={tw`pr-2`}
						/>
						<Text style={tw`text-base text-[#223447] font-bold`}>Sell Now</Text>
					</View>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default ProductDetail;
