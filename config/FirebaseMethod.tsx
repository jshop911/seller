import firebase from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Alert } from "react-native";
import app from "./firebase";

export async function registration(email, password, lastName, firstName) {
	try {
		await app.auth().createUserWithEmailAndPassword(email, password);
		const currentUser = app.auth().currentUser;

		const db = app.firestore();
		db.collection("userSeller").doc(currentUser.uid).set({
			email: currentUser.email,
			lastName: lastName,
			firstName: firstName,
		});
	} catch (err) {
		Alert.alert("There is something wrong!", err.message);
	}
}

export async function signIn(email, password) {
	try {
		await app.auth().signInWithEmailAndPassword(email, password);
	} catch (err) {
		Alert.alert("There is something wrong!", err.message);
	}
}

export async function loggingOut() {
	try {
		await app.auth().signOut();
	} catch (err) {
		Alert.alert("There is something wrong!", err.message);
	}
}
