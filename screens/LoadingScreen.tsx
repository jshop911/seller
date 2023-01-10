import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import app from "../config/firebase";

export default function LoadingScreen({ navigation }) {
	useEffect(() => {
		app.auth().onAuthStateChanged((user) => {
			if (user) {
				navigation.replace("Home");
			} else {
				navigation.replace("Sign In");
			}
		});
	});

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#ffac2a",
		alignItems: "center",
		justifyContent: "center",
	},
});
