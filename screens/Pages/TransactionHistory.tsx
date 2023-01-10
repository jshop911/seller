import { View, Text, ScrollView, Image } from "react-native";
import tw from "twrnc";
import React from "react";

const TransactionHistory = () => {
	return (
		<View style={tw`p-2`}>
			<Text style={tw`font-bold text-lg pl-2`}>This Month</Text>
			{/* Items to be sold */}
			<ScrollView showsVerticalScrollIndicator={false} style={tw`h-80 mb-12`}>
				<View style={tw`mt-3`}>
					<View style={tw`bg-gray-200 rounded flex-row`}>
						<View style={tw`p-2`}>
							<Image
								source={{
									uri: "https://i.pinimg.com/736x/1a/e6/fb/1ae6fb6a0dcd8519270649bb78e2cbf9.jpg",
								}}
								style={tw`w-23 h-30 p-2 rounded`}
							/>
						</View>
						<View style={tw`pt-2 w-42`}>
							<Text style={tw`text-lg font-bold`}>Random Metal</Text>
							<Text style={tw`text-[#223447] font-bold underline`}>JShop</Text>
							<View style={tw`flex-row items-center`}>
								<Text style={tw`text-xs text-gray-600 font-bold`}>
									Deal Price:
								</Text>
								<Text style={tw`text-base text-[#faac2a] font-bold`}>
									10 Php / kg
								</Text>
							</View>
							<View style={tw`flex-row items-center`}>
								<Text style={tw`text-xs text-gray-600 font-bold`}>
									Kg sold:
								</Text>
								<Text style={tw`text-sm text-gray-600 font-bold`}> 5 kg</Text>
							</View>
						</View>
						<View style={tw`self-center`}>
							<Text style={tw`font-bold`}>Status:</Text>
							<Text style={tw`text-sm text-green-500`}>Done</Text>
							<Text style={tw`text-xs`}>10/22/2022</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default TransactionHistory;
