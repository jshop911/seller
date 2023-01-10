import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
require("firebase/firestore");
import Constants from "expo-constants";

const app = firebase.initializeApp({
	apiKey: Constants.manifest?.extra?.firebaseApiKey,
	authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
	databaseURL: Constants.manifest?.extra?.firebaseDatabaseURL,
	projectId: Constants.manifest?.extra?.firebaseProjectId,
	storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
	messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
	appId: Constants.manifest?.extra?.firebaseAppId,
});

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export default app;
