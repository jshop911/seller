import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";
import tw from "twrnc";

export default function Search() {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);
	return (
		<View style={tw`m-2`}>
			<Searchbar
				placeholder="Search"
				onChangeText={onChangeSearch}
				value={searchQuery}
			/>
		</View>
	);
}
