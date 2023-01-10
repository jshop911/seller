import {
	View,
	Text,
	TouchableOpacity,
	Alert,
	Image,
	Pressable,
	TextInput,
	ScrollView,
} from "react-native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import app from "../../config/firebase/Firebase";

export default function SellNow({ navigation }) {
	const [estimatedKg, setEstimatedKg] = useState();
	const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
		"Wait, we are fetching you location..."
	);

	let currentUserUID = app.auth().currentUser.uid;
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		async function getUserInfo() {
			try {
				let doc = await app
					.firestore()
					.collection("userSeller")
					.doc(currentUserUID)
					.get();

				if (!doc.exists) {
					Alert.alert("No user data found!");
				} else {
					let dataObj = doc.data();
					setFirstName(dataObj.firstName);
					setLastName(dataObj.lastName);
				}
			} catch (err) {
				Alert.alert("There is an error.", err.message);
			}
		}
		getUserInfo();
	});

	const sellNow = async () => {
		if (!estimatedKg) {
			alert("Please enter the estimated weight to sell!");
		} else if (
			estimatedKg == 0 ||
			estimatedKg == 1 ||
			estimatedKg == 2 ||
			estimatedKg == 3 ||
			estimatedKg == 4
		) {
			alert("Sorry, but the minimum kg to be sold is 5.");
		} else {
			alert("Thank you. Please wait for buyers confirmation.");
			navigation.navigate("SellConfirmation");
		}
	};

	useEffect(() => {
		GetCurrentLocation();
	}, []);

	const GetCurrentLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== "granted") {
			Alert.alert(
				"Permission not granted",
				"Allow the app to use location service.",
				[{ text: "OK" }],
				{ cancelable: false }
			);
		}

		let { coords } = await Location.getCurrentPositionAsync();

		if (coords) {
			const { latitude, longitude } = coords;
			let response = await Location.reverseGeocodeAsync({
				latitude,
				longitude,
			});

			for (let item of response) {
				let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

				setDisplayCurrentAddress(address);
			}
		}
	};

	return (
		<>
			<View style={tw`p-2`}>
				<View style={tw`p-2 border border-gray-300 rounded`}>
					<View style={tw`w-50`}>
						<Text style={tw`font-bold text-lg text-gray-900`}>
							Profile Information
						</Text>
					</View>
					<Text style={tw`font-bold text-gray-700 text-base pt-2`}>
						{firstName} {lastName}
					</Text>
					<Text style={tw`text-sm`}>{displayCurrentAddress}</Text>
				</View>

				{/* Important reminders */}
				<View style={tw`p-2 mt-2 border border-gray-300 rounded bg-red-600`}>
					<Text style={tw`text-gray-50 font-bold`}>Important Reminders:</Text>
					<Text style={tw`text-gray-200 text-xs`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
						reiciendis eligendi repudiandae animi illum odio iure doloremque rem
						quae hic veritatis temporibus quis voluptates, suscipit excepturi
						perspiciatis laudantium incidunt quia.
					</Text>
				</View>

				{/* Items to be sold */}
				<ScrollView showsVerticalScrollIndicator={false} style={tw`h-80 mb-12`}>
					<View style={tw`mt-3`}>
						<View style={tw`bg-gray-200 rounded flex-row`}>
							<View style={tw`p-2`}>
								<Image
									source={{
										uri: "https://i.pinimg.com/736x/1a/e6/fb/1ae6fb6a0dcd8519270649bb78e2cbf9.jpg",
									}}
									style={tw`w-25 h-30 p-2 rounded`}
								/>
							</View>
							<View style={tw`pt-2 w-54`}>
								<Text style={tw`text-lg font-bold`}>Random Metal</Text>
								<Text style={tw`text-[#223447] font-bold underline`}>
									JShop
								</Text>
								<View style={tw`flex-row items-center`}>
									<Text style={tw`text-xs text-gray-600 font-bold`}>
										Deal Price:
									</Text>
									<Text style={tw`text-base text-red-500 font-bold pl-2`}>
										10 Php / kg
									</Text>
								</View>
								<View style={tw`flex-row items-center`}>
									<Text style={tw`text-xs text-gray-600 font-bold`}>
										Maximum kg to sell:
									</Text>
									<Text style={tw`text-sm text-gray-600 font-bold`}> 5 kg</Text>
								</View>
								<View style={tw`flex-row items-center`}>
									<Text style={tw`text-xs text-gray-600 font-bold`}>
										Estimated kg to sell:
									</Text>
									<TextInput
										value={estimatedKg}
										onChangeText={setEstimatedKg}
										keyboardType="number-pad"
										returnKeyType="done"
										textContentType="oneTimeCode"
										maxLength={4}
										placeholder="0"
										style={tw`ml-2 px-2 border border-red-500 w-12 h-7 text-right`}
									/>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>

			{/* Sell now button */}
			<TouchableOpacity onPress={sellNow}>
				<View style={tw`m-2 bg-[#faac2a] rounded`}>
					<Text style={tw`text-center p-3 font-bold`}>Sell now</Text>
				</View>
			</TouchableOpacity>
		</>
	);
}
