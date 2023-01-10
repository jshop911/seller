import React from "react";
import {
	StyleSheet,
	ScrollView,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import tw from "twrnc";
import CustomBtn from "../components/CustomBtn";

const auth = getAuth();

const SignInScreen = ({ navigation }) => {
	const [value, setValue] = React.useState({
		email: "",
		password: "",
		error: "",
	});

	async function signIn() {
		if (value.email === "" || value.password === "") {
			setValue({
				...value,
				error: "Email and password are mandatory.",
			});
			return;
		}

		try {
			await signInWithEmailAndPassword(auth, value.email, value.password);
		} catch (error) {
			setValue({
				...value,
				error: error.message,
			});
		}
	}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<KeyboardAwareScrollView>
				<StatusBar translucent={true} backgroundColor="#fff" />
				<View style={tw`flex-1`}>
					<Image
						style={tw`w-full h-60`}
						source={require("../assets/images/signin-banner.jpg")}
					/>
					<Text
						style={tw`text-4xl pt-2 px-4 text-left text-gray-700 font-bold`}
					>
						Sign in
					</Text>
					<Text
						style={tw`text-sm text-justify italic px-4 text-left text-gray-600 `}
					>
						*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
						earum, qui corporis distinctio repellendus adipisci exercitationem.
					</Text>

					{!!value.error && (
						<View style={tw`p-2 mt-2 bg-red-800`}>
							<Text style={tw`text-gray-50 pl-4 italic`}>*{value.error}</Text>
						</View>
					)}

					<View style={tw`px-4 pt-5`}>
						<Input
							placeholder="Email"
							value={value.email}
							autoCapitalize="none"
							keyboardType="email-address"
							onChangeText={(text) => setValue({ ...value, email: text })}
							leftIcon={<Icon name="envelope" size={16} />}
						/>

						<Input
							placeholder="Password"
							value={value.password}
							onChangeText={(text) => setValue({ ...value, password: text })}
							secureTextEntry={true}
							leftIcon={<Icon name="key" size={16} />}
						/>

						<CustomBtn onPress={signIn} text="Sign In" />
						{/* Forgot Password button */}
						<TouchableOpacity
							onPress={() => navigation.navigate("Forgot Password")}
						>
							<Text style={tw`text-center text-gray-500 text-sm py-3`}>
								Forgot Password?
							</Text>
						</TouchableOpacity>

						{/* Sign up/ or registration button */}
						<Text style={tw`text-center text-sm pt-5 pb-14 text-gray-600`}>
							Don't have an account? Please{" "}
							<Text
								onPress={() => navigation.navigate("Sign Up")}
								style={tw`text-red-500 underline`}
							>
								Register here.
							</Text>
						</Text>
					</View>
				</View>
			</KeyboardAwareScrollView>
		</ScrollView>
	);
};

export default SignInScreen;
