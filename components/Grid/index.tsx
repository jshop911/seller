import * as React from "react";
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	View,
	FlatList,
	SafeAreaView,
} from "react-native";
import { Product } from "../../Interface";

interface GridProps {
	products: Product[];
}

const Grid = (props: GridProps) => {
	const renderItem: React.FC<{ item: Product; index: number }> = ({
		item,
		index,
	}) => {
		return (
			<TouchableOpacity style={styles.card}>
				<Image source={{ uri: item.image }} style={styles.image} />
				<View>
					<Text>{item.title}</Text>
					<Text>{item.price}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView>
			<FlatList
				data={props.products}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				contentContainerStyle={{ paddingBottom: 20 }}
				style={styles.grid}
			/>
		</SafeAreaView>
	);
};

export default Grid;

const styles = StyleSheet.create({
	grid: {
		paddingHorizontal: 30,
	},
	image: {
		width: "100%",
		height: "70%",
		resizeMode: "cover",
	},
	card: {
		flex: 1,
		height: 219,
	},
});
