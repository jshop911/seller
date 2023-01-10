import React, { useState, useEffect, useRef, FC } from "react";
import tw from "twrnc";
import {
	MaterialCommunityIcons,
	FontAwesome,
	AntDesign,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Input } from "react-native-elements";
import { RadioButton, Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import PhoneInput from "react-native-phone-number-input";
import Icon from "react-native-vector-icons/FontAwesome";
import {
	ScrollView,
	Text,
	View,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import CustomBtn from "../../components/CustomBtn";
import app from "../../config/firebase/Firebase";

const auth = getAuth();

const EditProfile = ({ navigation }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [birthDay, setBirthDay] = useState();
	const [birthMonth, setBirthMonth] = useState();

	const phoneInput = useRef<PhoneInput>(null);

	const pickerRef = useRef();

	const [value, setValue] = useState({
		email: "",
		password: "",
		repeatPassword: "",
		firstName: "",
		lastName: "",
		userName: "",
		birthYear: parseInt(""),
		address: "",
		phoneNum: parseInt(""),
		gender: "",
		error: "",
	});

	useEffect(() => {
		checkForCameraRollPermission();
	}, []);

	// add profile Image
	const addProfileImage = async () => {
		// For the getting image from the gallery folder
		let _image = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [2, 2],
			quality: 1,
		});

		console.log(JSON.stringify(_image));
		// if they want to cancelled or edit the image selected
		if (!_image.canceled) {
			setSelectedImage(_image.uri);
		}
	};

	// for capturing image
	const checkForCameraRollPermission = async () => {
		const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
		if (status !== "granted") {
			alert(
				"Please grant camera roll permissions inside your system's settings"
			);
		} else {
			console.log("Media Permissions are granted");
		}
	};

	async function update() {
		const strongInputs = new RegExp(
			"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
		);

		if (
			value.email === "" ||
			value.password === "" ||
			value.firstName === "" ||
			value.lastName === "" ||
			value.userName === "" ||
			value.address === "" ||
			value.phoneNum === parseInt("") ||
			value.gender === "" ||
			value.birthYear === parseInt("") ||
			birthDay === "" ||
			birthMonth === "" ||
			typeOfUser === ""
		) {
			setValue({
				...value,
				error: "Please fill out all required fields.",
			});
			return;
		} else if (!strongInputs.test(value.email)) {
			setValue({
				...value,
				error: "Please input your email address \nex. sample@example.com!",
			});
			return;
		} else if (value.password.length < 8) {
			setValue({
				...value,
				error:
					"Please secure your password with a\nminimum of 8 characters/numbers/symbols!",
			});
			return;
		} else if (value.password != value.repeatPassword) {
			setValue({
				...value,
				error: "Password did not match.",
			});
			return;
		}
		try {
			app
				.auth()
				.createUserWithEmailAndPassword(value.email.trim(), value.password)
				.then((response) => {
					const uid = response.user.uid;
					const data = {
						id: uid,
						email: value.email,
						firstName: value.firstName,
						lastName: value.lastName,
						userName: value.userName,
						birthDay: birthDay,
						birthMonth: birthMonth,
						birthYear: value.birthYear,
						phoneNum: value.phoneNum,
						typeOfUser: typeOfUser,
						gender: value.gender,
						address: value.address,
						photoURL:
							selectedImage || "https://image.pngaaa.com/419/263419-middle.png",
					};
					const usersRef = app.firestore().collection("userSeller");
					usersRef
						.doc(uid)
						.set(data)
						.then(() => {
							Alert.alert("Welcome to jshop");
							navigation.navigate("Profile");
						})
						.catch((error) => {
							console.log(error);
							Alert.alert("There is something wrong!!!!");
						});
				})
				.catch((error) => {
					console.log(error);
					Alert.alert("There is something wrong!!!!");
				});
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
				<View style={tw`flex-1 bg-[#e0e0e0]`}>
					{/* ------ Upload Image ---------- */}
					<View
						style={tw`h-30 w-30 self-center h-30 w-30 mt-4 bg-gray-300 rounded-full relative overflow-hidden border-4 border-gray-100 shadow`}
					>
						{selectedImage && (
							<Image source={{ uri: selectedImage }} style={tw`w-30 h-30`} />
						)}

						<View
							style={tw`absolute right-0 bottom-0 w-30 h-10 opacity-70 bg-[#faac2a]`}
						>
							<TouchableOpacity
								onPress={addProfileImage}
								style={tw`self-center items-center`}
							>
								<Text style={tw`text-xs`}>
									{selectedImage ? "Edit" : "Upload"} Image
								</Text>
								<AntDesign name="camera" size={18} color="#000" />
							</TouchableOpacity>
						</View>
					</View>
					{/* ----x-- Upload Image ------x---- */}

					{!!value.error && (
						<View style={tw`bg-red-800 m-4`}>
							<Text style={tw`p-3 text-gray-50 italic`}>*{value.error}</Text>
						</View>
					)}

					<View style={tw`px-4`}>
						<Input
							placeholder="First Name"
							containerStyle={tw`pt-3`}
							autoCapitalize="none"
							keyboardType="default"
							value={value.firstName}
							onChangeText={(text) => setValue({ ...value, firstName: text })}
							leftIcon={<Icon name="user" size={16} />}
						/>
						<Input
							placeholder="Last Name"
							autoCapitalize="none"
							keyboardType="default"
							value={value.lastName}
							onChangeText={(text) => setValue({ ...value, lastName: text })}
							leftIcon={<Icon name="user" size={16} />}
						/>
						<Input
							placeholder="Username"
							autoCapitalize="none"
							keyboardType="default"
							value={value.userName}
							onChangeText={(text) => setValue({ ...value, userName: text })}
							leftIcon={<Icon name="user" size={16} />}
						/>

						{/* ----  Phone number ------  */}
						<View
							style={tw`mb-4 mx-2 bg-[#e0e0e0] border-b border-solid border-gray-400`}
						>
							<PhoneInput
								ref={phoneInput}
								defaultValue={value.phoneNum}
								defaultCode="PH"
								layout="first"
								maxLength={10}
								disableArrowIcon
								flagButtonStyle={tw`w-14 h-12 ml-2 pb-2 pl-2 bg-[#e0e0e0] items-center justify-center`}
								containerStyle={tw`bg-[#e0e0e0] pb-2`}
								textContainerStyle={tw`p-2 h-12 ml-2 mr-2 font-medium bg-[#e0e0e0]`}
								textInputStyle={tw`text-base text-gray-800`}
								onChangeFormattedText={(text) =>
									setValue({ ...value, phoneNum: text })
								}
							/>
						</View>

						{/* ----  Gender ------  */}
						<View style={tw`flex-row px-2 py-4`}>
							<MaterialCommunityIcons
								name="gender-male-female"
								size={20}
								color={"#223447"}
								style={tw`self-center mr-8`}
							/>
							<RadioButton
								value="Male"
								color={"#223447"}
								uncheckedColor={"#223447"}
								status={value.gender === "Male" ? "checked" : "unchecked"}
								onPress={() => setValue({ ...value, gender: "Male" })}
							/>
							<Text style={tw`self-center pr-20`}>Male</Text>
							<RadioButton
								value="Female"
								color={"#223447"}
								uncheckedColor={"#223447"}
								status={value.gender === "Female" ? "checked" : "unchecked"}
								onPress={() => setValue({ ...value, gender: "Female" })}
							/>
							<Text style={tw`self-center pr-8`}>Female</Text>
						</View>

						{/* ----  birthday ------  */}
						<View style={tw`pt-4 flex-row self-center`}>
							<FontAwesome
								name="birthday-cake"
								size={16}
								color={"#223447"}
								style={tw`pt-5`}
							/>
							{/* -- birth day --- */}
							<Picker
								ref={pickerRef}
								selectedValue={birthDay}
								outlineColor="#33c9fe"
								activeOutlineColor="#FF0000"
								style={tw`ml-1 p-2 text-base text-gray-500 bg-[#e0e0e0] w-23 h-10`}
								onValueChange={(itemValue, itemIndex) => setBirthDay(itemValue)}
							>
								<Picker.Item label="Day" value="Day" enabled={false} />
								<Picker.Item label="1" value="1" />
								<Picker.Item label="2" value="2" />
								<Picker.Item label="3" value="3" />
								<Picker.Item label="4" value="4" />
								<Picker.Item label="5" value="5" />
								<Picker.Item label="6" value="6" />
								<Picker.Item label="7" value="7" />
								<Picker.Item label="8" value="8" />
								<Picker.Item label="9" value="9" />
								<Picker.Item label="10" value="10" />
								<Picker.Item label="11" value="11" />
								<Picker.Item label="12" value="12" />
								<Picker.Item label="13" value="13" />
								<Picker.Item label="14" value="14" />
								<Picker.Item label="15" value="15" />
								<Picker.Item label="16" value="16" />
								<Picker.Item label="17" value="17" />
								<Picker.Item label="18" value="18" />
								<Picker.Item label="19" value="19" />
								<Picker.Item label="20" value="20" />
								<Picker.Item label="21" value="21" />
								<Picker.Item label="22" value="22" />
								<Picker.Item label="23" value="23" />
								<Picker.Item label="24" value="24" />
								<Picker.Item label="25" value="25" />
								<Picker.Item label="26" value="26" />
								<Picker.Item label="27" value="27" />
								<Picker.Item label="28" value="28" />
								<Picker.Item label="29" value="29" />
								<Picker.Item label="30" value="30" />
								<Picker.Item label="31" value="31" />
							</Picker>
							{/* -- birth month --- */}
							<Picker
								ref={pickerRef}
								selectedValue={birthMonth}
								outlineColor="#223447"
								activeOutlineColor="#FF0000"
								style={tw`ml-1 px-2 text-base text-gray-500 bg-[#e0e0e0] w-30 h-10`}
								onValueChange={(itemValue, itemIndex) =>
									setBirthMonth(itemValue)
								}
							>
								<Picker.Item label="Month" value="Month" enabled={false} />
								<Picker.Item label="JAN" value="January" />
								<Picker.Item label="FEB" value="February" />
								<Picker.Item label="MAR" value="March" />
								<Picker.Item label="APR" value="April" />
								<Picker.Item label="MAY" value="May" />
								<Picker.Item label="JUN" value="June" />
								<Picker.Item label="JUL" value="July" />
								<Picker.Item label="AUG" value="August" />
								<Picker.Item label="SEP" value="September" />
								<Picker.Item label="OCT" value="October" />
								<Picker.Item label="NOV" value="November" />
								<Picker.Item label="DEC" value="December" />
							</Picker>
							{/* ----  Birth Year ------  */}
							<Input
								placeholder="Year"
								autoCapitalize="none"
								keyboardType="default"
								value={value.birthYear}
								containerStyle={tw`w-30`}
								keyboardType="numeric"
								underlineColorAndroid="transparent"
								onChangeText={(text) => setValue({ ...value, birthYear: text })}
							/>
						</View>

						<Input
							placeholder="Address"
							autoCapitalize="none"
							keyboardType="default"
							value={value.address}
							onChangeText={(text) => setValue({ ...value, address: text })}
							leftIcon={<Icon name="map-marker" size={16} />}
						/>

						<Input
							placeholder="Password"
							value={value.password}
							onChangeText={(text) => setValue({ ...value, password: text })}
							secureTextEntry={true}
							keyboardType="default"
							autoCapitalize="none"
							autoCorrect={false}
							leftIcon={<Icon name="key" size={16} />}
						/>
						<Input
							placeholder="Repeat Password"
							value={value.repeatPassword}
							onChangeText={(text) =>
								setValue({ ...value, repeatPassword: text })
							}
							secureTextEntry={true}
							keyboardType="default"
							autoCapitalize="none"
							autoCorrect={false}
							leftIcon={<Icon name="key" size={16} />}
						/>

						{/* ----- terms and conditions ----- */}
						<View style={tw`ml-2 py-2`}>
							<Text style={tw`text-sm text-gray-500`}>
								By clicking update button, you can confirm that you accept our
								<Text style={tw`text-red-600 font-bold`}>
									{" "}
									Terms of use
								</Text>{" "}
								and
								<Text style={tw`text-red-600 font-bold`}> Privacy Policy.</Text>
							</Text>
						</View>

						{/* This is the Submit Button section */}
						<CustomBtn text="Update" onPress={update} />
					</View>
				</View>
			</KeyboardAwareScrollView>
		</ScrollView>
	);
};

export default EditProfile;
