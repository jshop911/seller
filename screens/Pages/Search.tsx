import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { useEffect, useState } from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	SafeAreaView,
	FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { Avatar } from "react-native-elements";
import tw from "twrnc";
import { db } from "../../config/firebase/Firebase";
require("firebase/firestore");

export default function Search({ navigation }) {
	//search users
	const [users, setUsers] = useState([]);

	const fetchUsers = (search) => {
		db
			.collection("buyerUser")
			.where("firstName" || "lastName", ">=", search)
			.get()
			.then((snapshot) => {
				let users = snapshot.docs.map((doc) => {
					const data = doc.data();
					const id = doc.id;
					return { id, ...data };
				});
				setUsers(users);
			});
	};

	return (
		<>
			<ScrollView>
			<SafeAreaView>
				<View style={tw`mt-4 p-4`}>
					<Searchbar
						placeholder="Search"
						onChangeText={(search) => fetchUsers(search)}
					/>

					<FlatList
						numColumns={1}
						horizontal={false}
						data={users}
						renderItem={({ item }) => (
							<View style={tw`flex-row py-4 border-b border-gray-200`}>
								<TouchableOpacity
									onPress={() =>
										navigation.navigate("ProfileUsers", { uid: item.id })
									}
								>
									<View style={tw`flex-row pl-2 self-center items-center`}>
										<Avatar
											size={38}
											rounded
											title="P"
											source={{ uri: item.photoURL }}
											containerStyle={{
												backgroundColor: "#33c9fe",
											}}
										/>
										<Text
											style={tw`pl-4 text-[#000] text-base font-bold self-center`}
										>
											{item.firstName} {item.lastName}
										</Text>
									</View>
								</TouchableOpacity>
							</View>
						)}
					/>
					{/* ------------- End of Recent item Search Section ----------------  */}
				</View>
			</SafeAreaView>
			{/* ------------- End of Search Section ----------------  */}
		</ScrollView>

		</>
			);
}
