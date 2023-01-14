import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { Button } from "react-native-paper";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import NotificationData from "../../assets/api/NotificationData";
import { db } from "../../config/firebase/Firebase";

export default function Notification({ navigation }) {

	const [SellStatus, setSellStatus] = useState();

	useEffect(() => {
	  getDisplayData();
	}, []);
  
	const getDisplayData = () => {
	  const getDataFromFirebase = [];
	  const sub = db.collection("placeSell").onSnapshot((querySnapshot) => {
		querySnapshot.forEach((doc) => {
		  getDataFromFirebase.push({ ...doc.data(), id: doc.id, key: doc.id });
		});
		setSellStatus(getDataFromFirebase);
	  });
	};

	
	return (
		<FlatList
			data={SellStatus}
			keyExtractor={(item) => item.itemId}
			renderItem={({ item }) => (
				<View
					style={tw`flex flex-row border-b border-gray-300 bg-gray-200 rounded mb-2`}
				>
					<View style={tw`p-2 self-center`}>
						<Avatar
							size={80}
							rounded
							title="P"
							source={{
								uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAi1_6yGhUnU-y3n67_jHqQHlk02DE9MMAdKYj11g0nFWJToV8oN8PQWlgc0W20vQ6Gw&usqp=CAU",
							}}
						/>
					</View>
					<View>
						{/* For sellers name and time */}
						<View style={tw`flex-row pt-4`}>
							<View style={tw`w-40`}>
								<Text style={tw`text-base font-bold`}>{item.productName}</Text>
							</View>
							<View>
								<Text style={tw`text-xs text-gray-600`}>{item.sellDate.toDate().toDateString()}</Text>
							</View>
						</View>
						{/* For sellers name and time end */}

						<View style={tw`pb-2`}>
							<Text style={tw`text-sm w-60`}>
								<Text style={tw`font-bold`}>{item.buyerName},</Text> the buyer,
								confirmed. Please allow{" "}
								<Text style={tw`font-bold text-red-500`}>20 mins</Text> for the buyer to
								arrive at your given address.
							</Text>
						</View>
					</View>
				</View>
			)}
		/>
	);
}
