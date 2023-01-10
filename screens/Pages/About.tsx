import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

const About = () => {
	return (
		<View style={tw`m-2`}>
			<View>
				<Text style={tw`p-2 text-2xl font-bold`}>About JShop</Text>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={tw`h-full mb-20`}>
					<Text style={tw`px-2 text-justify mb-2`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
						nisi, ex assumenda accusantium cumque mollitia excepturi laboriosam
						rem distinctio error nemo dicta quia, sequi ab atque laborum. Qui,
						tenetur veritatis. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Eaque nisi, ex assumenda accusantium cumque
						mollitia excepturi laboriosam rem distinctio error nemo dicta quia,
						sequi ab atque laborum. Qui, tenetur veritatis.
					</Text>
					<Text style={tw`px-2 text-justify  mb-2`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
						nisi, ex assumenda accusantium cumque mollitia excepturi laboriosam
						rem distinctio error nemo dicta quia, sequi ab atque laborum. Qui,
						tenetur veritatis. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Eaque nisi, ex assumenda accusantium cumque
						mollitia excepturi laboriosam rem distinctio error nemo dicta quia,
						sequi ab atque laborum. Qui, tenetur veritatis.
					</Text>
					<Text style={tw`px-2 text-justify  mb-2`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
						nisi, ex assumenda accusantium cumque mollitia excepturi laboriosam
						rem distinctio error nemo dicta quia, sequi ab atque laborum. Qui,
						tenetur veritatis. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Eaque nisi, ex assumenda accusantium cumque
						mollitia excepturi laboriosam rem distinctio error nemo dicta quia,
						sequi ab atque laborum. Qui, tenetur veritatis.
					</Text>
					<Text style={tw`px-2 text-justify  mb-2`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
						nisi, ex assumenda accusantium cumque mollitia excepturi laboriosam
						rem distinctio error nemo dicta quia, sequi ab atque laborum. Qui,
						tenetur veritatis. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Eaque nisi, ex assumenda accusantium cumque
						mollitia excepturi laboriosam rem distinctio error nemo dicta quia,
						sequi ab atque laborum. Qui, tenetur veritatis.
					</Text>
					<Text style={tw`px-2 text-justify  mb-2`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
						nisi, ex assumenda accusantium cumque mollitia excepturi laboriosam
						rem distinctio error nemo dicta quia, sequi ab atque laborum. Qui,
						tenetur veritatis.
					</Text>
					<Text style={tw`px-2 text-justify  mb-2`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
						nisi, ex assumenda accusantium cumque mollitia excepturi laboriosam
						rem distinctio error nemo dicta quia, sequi ab atque laborum. Qui,
						tenetur veritatis.
					</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default About;
