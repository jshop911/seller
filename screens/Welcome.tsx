import React from "react";
import tw from "twrnc";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Touchable,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "react-native-elements";

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
	return (
		<View style={tw`flex-1`}>
			<Image
				style={tw`w-full h-75 mt-6`}
				source={require("../assets/images/splash.png")}
			/>
			<View style={tw`p-4 text-center self-center border-b border-gray-300`}>
				<Text style={tw`text-3xl text-[#faac2a] font-bold`}>
					Welcome Seller 😀
				</Text>
				<Text style={tw`text-lg text-center text-gray-600`}>
					Let's get started!
				</Text>
			</View>

			<View style={tw`pt-6 px-12 items-center`}>
				<Text>Already have an account please</Text>
			</View>
			<View style={tw`pt-4 items-center`}>
				<TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
					<Text
						style={tw`bg-[#ffac2a] font-bold text-[#223447] p-4 rounded w-70 text-center`}
					>
						Sign in
					</Text>
				</TouchableOpacity>
			</View>

			<View style={tw`pt-2 px-12 items-center`}>
				<Text>--------------- OR ---------------</Text>
			</View>
			<View style={tw`py-4 items-center`}>
				<TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
					<Text
						style={tw`bg-[#223447] text-gray-100 p-4 rounded w-70 text-center`}
					>
						Sign up
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default WelcomeScreen;
