/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
	prefixes: [Linking.createURL("/")],
	config: {
		screens: {
			Root: {
				screens: {
					Home: {
						screens: {
							Home: "one",
						},
					},
					MessageList: {
						screens: {
							MessageList: "two",
						},
					},
					Notification: {
						screens: {
							Notification: "three",
						},
					},
					Profile: {
						screens: {
							Profile: "four",
						},
					},
				},
			},
			About: "modal",
			Search: "modal",
			ProductDetail: "modal",
			ListCategory: "modal",
			Login: "modal",
			SignUp: "modal",
			EditProfile: "modal",
			SellNow: "modal",
			SellConfirmation: "modal",
			MessagePage: "modal",
			TransactionHistory: "modal",
			ForgotPassword: "modal",
			NotFound: "*",
		},
	},
};

export default linking;
