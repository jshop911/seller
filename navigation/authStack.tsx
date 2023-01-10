import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/Welcome";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPassword from "../screens/ForgotPassword";
import LoadingScreen from "../screens/LoadingScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Loading"
					component={LoadingScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Sign In"
					component={SignInScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Sign Up"
					component={SignUpScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Forgot Password" component={ForgotPassword} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
