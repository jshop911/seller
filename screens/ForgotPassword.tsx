import * as React from "react";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import { ScrollView, Image, View, Text, Pressable, Alert } from "react-native";

import tw from "twrnc";
import app from "../config/firebase/Firebase";
import CustomBtn from "../components/CustomBtn";

const ForgotPassword = ({ navigation }) => {
	const [email, setEmail] = useState("");

	const onResetPasswordPress = () => {
		if (!email) {
			Alert.alert("Please enter your registered email address.");
		}

		app
			.auth()
			.sendPasswordResetEmail(email)
			.then(
				() => {
					Alert.alert(
						"Please check your email \nthat has been sent to reset your password."
					);
					navigation.navigate("Sign In");
				},
				(error) => {
					Alert.alert("Unknown error occurred.");
				}
			);
	};

	return (
		<View style={tw`h-full`}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={tw`flex-1 bg-[#e0e0e0]`}>
					{/* ----  Forgot Password image info  ------  */}
					<Image
						source={require("../assets/images/forgotpassword-banner.jpg")}
						style={tw`w-full h-80`}
					/>
					<Text
						style={tw`text-center text-2xl text-red-600 font-bold pt-4 tracking-widest`}
					>
						Forgot Password
					</Text>
					<Text style={tw`text-center pb-4`}>
						<Text style={tw`text-red-500 text-lg font-bold`}>*</Text>Please
						confirm your registered email address {"\n"} to verify your account
						before attempting to {"\n"} reset your password!
					</Text>

					{/* ----  Email or phone  ------  */}
					<View style={tw`px-8 pb-2 ml-2`}>
						<TextInput
							mode="outlined"
							label="Your E-mail address"
							left={
								<TextInput.Icon
									name="account-key"
									color={"#223447"}
									style={tw`self-center pt-2`}
								/>
							}
							value={email}
							onChangeText={setEmail}
							autoCapitalize="none"
							keyboardType="email-address"
							underlineColor="#223447"
							outlineColor="#223447"
							activeOutlineColor="#FF0000"
							style={tw`w-full h-12 mr-2 font-medium bg-gray-100`}
						/>
					</View>
					<View style={tw`px-8 pb-2 ml-2`}>
						{/* Submit button */}
						<CustomBtn text="Confirm" onPress={onResetPasswordPress} />
					</View>

					{/* Cancel button */}
					<Pressable>
						<Text style={tw`text-center text-sm text-gray-600 pt-6 pb-16`}>
							Cancel Back to{" "}
							<Text
								onPress={() => navigation.navigate("Sign In")}
								style={tw`text-red-500 font-bold underline`}
							>
								Log in.
							</Text>
						</Text>
					</Pressable>
				</View>
			</ScrollView>
		</View>
	);
};

export default ForgotPassword;
