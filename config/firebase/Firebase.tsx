import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
require("firebase/firestore");
import Constants from "expo-constants";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDR4JxWa0z6PnzFYgsUSnQymythbvs1dV4",
  authDomain: "jshop-seller-buyer.firebaseapp.com",
  projectId: "jshop-seller-buyer",
  storageBucket: "jshop-seller-buyer.appspot.com",
  messagingSenderId: "589369620337",
  appId: "1:589369620337:web:d7fa84948cc2894b6b68d0",
});

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export default app;
