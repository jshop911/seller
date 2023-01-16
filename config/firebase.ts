// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import Constants from "expo-constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDR4JxWa0z6PnzFYgsUSnQymythbvs1dV4",
  authDomain: "jshop-seller-buyer.firebaseapp.com",
  projectId: "jshop-seller-buyer",
  storageBucket: "jshop-seller-buyer.appspot.com",
  messagingSenderId: "589369620337",
  appId: "1:589369620337:web:d7fa84948cc2894b6b68d0"
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();
export default app;
