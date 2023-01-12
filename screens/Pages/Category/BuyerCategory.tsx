import { View, Text, FlatList, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

import { db, app } from "../../../config/firebase/Firebase";
export default function BuyerCategory() {
	const navigation = useNavigation();
	const [CATEGORY, setCategory] = useState()

	useEffect(()=>{
		getDisplayData()
	}, [])

	const getDisplayData = () => {
		const getDataFromFirebase = [];
		const sub = db
		  .collection("postedItem")
		  .onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
			  getDataFromFirebase.push({ ...doc.data(), id: doc.id, key: doc.id });
			});
			setCategory(getDataFromFirebase);
			// setLoading(false);
		  });
	  };
	return (
		<View style={tw`flex-row`}>
			<Text
				style={tw`items-center self-center text-sm text-gray-800 font-bold py-9 px-2 bg-[#faac2a]`}
			>
				Category
			</Text>
			<FlatList
				data={CATEGORY}
				keyExtractor={(item) => item.id}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<View style={tw`flex-row p-2`}>
						<View style={tw`bg-gray-200 p-2 rounded shadow-md`}>
							<Pressable
								style={({ pressed }) => ({
									opacity: pressed ? 0.5 : 1,
								})}
								onPress={()=> {
									navigation.navigate("ProductDetail", {itemId: item.id, itemName: item.productName, kg: item.minKg})
								}}
							>
								<Image
									style={tw`w-25 h-15 rounded px-2 border-solid border-2 border-gray-400`}
									source={{
										uri: item.selectedProductImage,
									}}
								/>
							</Pressable>
							<Text style={tw`text-xs text-gray-700 text-center font-bold`}>
								{item.listOfCategory}
							</Text>
							

						</View>
					</View>
				)}
			/>
		</View>
	);
}
