import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
	Image,
	Pressable,
	TouchableOpacity,
	View,
	Text,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { getAuth, signOut } from "firebase/auth";
import tw from "twrnc";
import { Badge } from "react-native-elements";
import BuyerCategory from "./Category/BuyerCategory";
import BuyerData from "./Category/BuyerData";
import { RootTabScreenProps } from "../../types";
import app from "../../config/firebase/Firebase";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
	let currentUserUID = app.auth().currentUser.uid;
	const [userName, setUserName] = useState("");
	const [photoURL, setPhotoURL] = useState("");

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
					setUserName(dataObj.userName);
					setPhotoURL(dataObj.photoURL);
				}
			} catch (err) {
				Alert.alert("There is an error.", err.message);
			}
		}
		getUserInfo();
	});

	return (
		<View style={tw`w-full py-2`}>
			<StatusBar />

			<View
				style={tw`flex flex-row self-start w-full p-2 border-b border-gray-300`}
			>
				<Image
					source={photoURL ? { uri: photoURL } : { uri: "no-image" }}
					style={tw`w-12 h-12 rounded-full`}
				/>
				<View style={tw`pl-3 w-60`}>
					<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
						<Text style={tw`text-xl text-[#223447] font-bold`}>{userName}</Text>
						<Text style={tw`text-xs text-green-600`}>
							<MaterialCommunityIcons
								name="shield-account"
								size={18}
								color="green"
								style={tw`pr-2`}
							/>
							Seller
						</Text>
					</TouchableOpacity>
				</View>

				<View style={tw`items-center self-center`}>
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.5 : 1,
						})}
						onPress={() => navigation.navigate("SellConfirmation")}
					>
						<MaterialCommunityIcons
							name="cart-arrow-down"
							size={40}
							color="green"
							style={tw`pr-2`}
						/>
						<Badge
							value="99+"
							status="error"
							containerStyle={{ position: "absolute", top: -4, right: 2 }}
						/>
					</Pressable>
				</View>
			</View>

			<BuyerCategory navigation={undefined} />
			<View style={tw`mt-2 py-1 bg-[#faac2a] w-full`}>
				<Text
					style={tw`text-xl text-center text-[#223447] italic font-semibold`}
				>
					"Never refuse to reuse."
				</Text>
			</View>
			<BuyerData navigation={undefined} />
		</View>
	);
}
