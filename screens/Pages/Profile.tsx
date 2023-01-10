import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
	View,
	Text,
	Alert,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import CustomBtn from "../../components/CustomBtn";
import app from "../../config/firebase/Firebase";

const auth = getAuth();

const Profile = ({ navigation }) => {
	const [showInfo, setShowInfo] = useState(false);
	let currentUserUID = app.auth().currentUser.uid;
	const [userName, setUserName] = useState("");
	const [photoURL, setPhotoURL] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [birthDay, setBirthDay] = useState("");
	const [birthMonth, setBirthMonth] = useState("");
	const [birthYear, setBirthYear] = useState("");
	const [gender, setGender] = useState("");
	const [address, setAddress] = useState("");
	const [typeOfUser, setTypeOfUser] = useState("");

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
					setFirstName(dataObj.firstName);
					setLastName(dataObj.lastName);
					setEmail(dataObj.email);
					setBirthDay(dataObj.birthDay);
					setBirthMonth(dataObj.birthMonth);
					setBirthYear(dataObj.birthYear);
					setGender(dataObj.gender);
					setAddress(dataObj.address);
					setTypeOfUser(dataObj.typeOfUser);
				}
			} catch (err) {
				Alert.alert("There is an error.", err.message);
			}
		}
		getUserInfo();
	});

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<ImageBackground
				source={{
					uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlI4-a0f5e5ymlsjGVCW_nVmEh8l7CKOqUJU3ucnMQjlNdoWVlIysaWQqE0ix32FkkEdY&usqp=CAU",
				}}
				style={tw`w-auto h-auto`}
				blurRadius={3}
			>
				<View style={tw`my-4 self-center rounded-full border-4 border-gray-50`}>
					<Avatar
						size={100}
						rounded
						title="S"
						source={photoURL ? { uri: photoURL } : { uri: "no-image" }}
						containerStyle={{
							backgroundColor: "#faac2a",
						}}
					/>
				</View>
			</ImageBackground>
			<View style={tw`items-center py-3 border-b border-gray-300`}>
				<Text style={tw`text-center text-xl font-bold`}>
					{firstName} {lastName}
				</Text>
			</View>

			{/* Personal information */}
			<View style={tw`flex flex-row p-4`}>
				{showInfo ? (
					<MaterialCommunityIcons
						name="arrow-down-drop-circle"
						size={30}
						color={"#223447"}
					/>
				) : (
					<MaterialCommunityIcons
						name="arrow-right-drop-circle"
						size={30}
						color={"#223447"}
					/>
				)}

				<TouchableOpacity onPress={() => setShowInfo(!showInfo)}>
					<Text style={tw`pl-2 text-xl font-bold text-[#223447]`}>
						Personal Information
					</Text>
				</TouchableOpacity>
			</View>
			{showInfo ? (
				<View style={tw`pl-8`}>
					<View style={tw`flex flex-row px-4`}>
						<MaterialCommunityIcons
							name="account"
							size={24}
							color={"#223447"}
						/>
						<Text style={tw`pl-2 text-base font-bold text-[#223447]`}>
							{userName}
						</Text>
					</View>
					<View style={tw`flex flex-row p-4`}>
						<MaterialCommunityIcons name="email" size={24} color={"#223447"} />
						<Text style={tw`pl-2 text-base font-bold text-[#223447]`}>
							{email}
						</Text>
					</View>
					<View style={tw`flex flex-row px-4`}>
						<MaterialCommunityIcons
							name="cake-layered"
							size={24}
							color={"#223447"}
						/>
						<Text style={tw`pl-2 text-base font-bold text-[#223447]`}>
							{birthMonth} {birthDay} {birthYear}
						</Text>
					</View>
					<View style={tw`flex flex-row p-4`}>
						<MaterialCommunityIcons
							name="gender-male-female"
							size={24}
							color={"#223447"}
						/>
						<Text style={tw`pl-2 text-base font-bold text-[#223447]`}>
							{gender}
						</Text>
					</View>
					<View style={tw`flex flex-row px-4`}>
						<MaterialCommunityIcons
							name="shield-account"
							size={24}
							color={"#223447"}
						/>
						<Text style={tw`pl-2 text-base font-bold text-[#223447]`}>
							{typeOfUser}
						</Text>
					</View>
					<View style={tw`flex flex-row p-4`}>
						<MaterialCommunityIcons
							name="map-marker"
							size={24}
							color={"#223447"}
						/>
						<Text style={tw`pl-2 text-base font-bold text-[#223447]`}>
							{address}
						</Text>
					</View>
					<View style={tw`ml-2 mb-2 w-80`}>
						<CustomBtn
							text="Update Profile"
							onPress={() => navigation.navigate("EditProfile")}
						/>
					</View>
				</View>
			) : null}

			{/* Message */}
			<View style={tw`flex flex-row px-4`}>
				<MaterialCommunityIcons
					name="message-star"
					size={30}
					color={"#223447"}
				/>
				<TouchableOpacity onPress={() => navigation.navigate("MessageList")}>
					<Text style={tw`pl-2 text-xl font-bold text-[#223447]`}>Message</Text>
				</TouchableOpacity>
			</View>
			{/* Sell Status */}
			<View style={tw`flex flex-row p-4`}>
				<MaterialCommunityIcons name="bookmark" size={30} color={"#223447"} />
				<TouchableOpacity
					onPress={() => navigation.navigate("SellConfirmation")}
				>
					<Text style={tw`pl-2 text-xl font-bold text-[#223447]`}>
						Sell Status
					</Text>
				</TouchableOpacity>
			</View>
			{/* Search */}
			<View style={tw`flex flex-row px-4`}>
				<MaterialCommunityIcons name="magnify" size={30} color={"#223447"} />
				<TouchableOpacity onPress={() => navigation.navigate("Search")}>
					<Text style={tw`pl-2 text-xl font-bold text-[#223447]`}>Search</Text>
				</TouchableOpacity>
			</View>

			{/* Transaction History */}
			<View style={tw`flex flex-row p-4`}>
				<MaterialCommunityIcons
					name="clipboard-text-clock"
					size={30}
					color={"#223447"}
				/>
				<TouchableOpacity
					onPress={() => navigation.navigate("TransactionHistory")}
				>
					<Text style={tw`pl-2 text-xl font-bold text-[#223447]`}>
						Transaction History
					</Text>
				</TouchableOpacity>
			</View>
			{/* About */}
			<View style={tw`flex flex-row px-4`}>
				<MaterialCommunityIcons
					name="cellphone-information"
					size={30}
					color={"#223447"}
				/>
				<TouchableOpacity onPress={() => navigation.navigate("About")}>
					<Text style={tw`pl-2 text-xl font-bold text-[#223447]`}>About</Text>
				</TouchableOpacity>
			</View>
			{/* Log out */}
			<View style={tw`flex flex-row p-4`}>
				<MaterialCommunityIcons name="logout" size={30} color={"#223447"} />
				<TouchableOpacity onPress={() => signOut(auth)}>
					<Text style={tw`pl-2 text-xl font-bold text-[#223447]`}>Log out</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Profile;
