import { ScrollView, Pressable, FlatList, Image, Button, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon, ListItem } from "react-native-elements";
import { db } from "../../config/firebase/Firebase";

export default function MessageList({route, navigation }) {

	  const [Chats, setChats] = useState();
	
	  // let currentUserUID = app.auth().currentUser.uid;
	  useEffect(() => {
		getDisplayData();
	  }, []);
	
	  const getDisplayData = () => {
		const getDataFromFirebase = [];
		const sub = db.collection("chats").onSnapshot((querySnapshot) => {
		  querySnapshot.forEach((doc) => {
			getDataFromFirebase.push({ ...doc.data(), id: doc.id, key: doc.id });
		  });
		  setChats(getDataFromFirebase);
		  // setLoading(false);
		});
	  };

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<FlatList
				data={Chats}
				keyExtractor={item => item._id}
				renderItem={({ item }) => (
					<ListItem style={tw`border-b border-gray-200`}>
						<ListItem.Content>
							<View style={tw`flex-row`}>
								<View style={tw`self-center`}>
									<MaterialCommunityIcons name="account-circle" size={35} />
								</View>
								<View style={tw`pl-2`}>
									<Pressable onPress={() => navigation.navigate("MessagePage")}>
											<ListItem.Title style={tw`font-bold`}></ListItem.Title>
										<ListItem.Subtitle style={tw`w-60`} numberOfLines={1}>
											{item.text}
										</ListItem.Subtitle>
									</Pressable>
								</View>
							</View>
						</ListItem.Content>
					</ListItem>
				)}
				
			/>
		</ScrollView>
	);
}
