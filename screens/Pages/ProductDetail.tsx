import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import app from "../../config/firebase/Firebase";

const ProductDetail = ({ route, navigation }) => {
  const [buyerName, setBuyerName] = useState("");
  const [dealPrice, setDealPrice] = useState("");
  const [selectedProductImage, setSelectedProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const {
    itemId,
    itemName,
    itemSelectedImage,
    minKg,
    itemDealPrice,
    itemUsername,
    itemAddress,
    itemProductDesc,
    listOfCategory,
  } = route?.params || {};

  console.log(JSON.stringify(minKg));

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`bg-[#ffffff]`}>
        <Image
          style={tw`flex self-center w-full h-70`}
          source={
            selectedProductImage
              ? { uri: itemSelectedImage }
              : {
                  uri: "https://www.nucleustechnologies.com/blog/wp-content/uploads/2017/01/Cannot-See-Images-in-Outlook-Emails-1200x900.jpg",
                }
          }
        />
        <View style={tw`p-4`}>
          <View style={tw`flex-row pb-2 border-b border-gray-200`}>
            <Text style={tw`text-3xl text-red-700 font-bold`}>Price Deal:</Text>
            <Text style={tw`text-3xl text-[#faac2a] pl-5 font-bold`}>
              Php {itemDealPrice}/kg
            </Text>
          </View>
          <Text style={tw`text-xl text-[#223447] font-bold`}>{itemName}</Text>
          <Text style={tw`text-sm text-justify`}>{itemProductDesc}</Text>
        </View>
      </ScrollView>
      <View style={tw`flex-row self-start w-full p-2 bg-gray-100`}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAi1_6yGhUnU-y3n67_jHqQHlk02DE9MMAdKYj11g0nFWJToV8oN8PQWlgc0W20vQ6Gw&usqp=CAU",
          }}
          style={tw`w-10 h-10 rounded-full`}
        />
        <View style={tw`pl-3`}>
          <Text style={tw`text-lg text-[#223447] font-bold`}>
            {itemUsername}
          </Text>
          <Text style={tw`text-xs text-green-400`}>
            <MaterialCommunityIcons
              name="check-decagram"
              size={16}
              color="green"
              style={tw`pr-2`}
            />
            Verified Buyer
          </Text>
        </View>
      </View>

      <View style={tw`bg-gray-50 flex-row`}>
        <TouchableOpacity
          onPress={() => {
            route.params.paramKey;
          }}
        >
          <View style={tw`flex-row w-52 py-4 pl-2`}>
            <MaterialCommunityIcons
              name="phone"
              size={24}
              color="#faac2a"
              style={tw`pr-2`}
            />
            <Text style={tw`text-base text-[#223447] font-bold`}>
              Contact Seller
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SellNow", {
              itemId: itemId,
              itemName: itemName,
              itemDealPrice: dealPrice,
              itemUsername: itemUsername,
              itemProductDesc: productDesc,
              itemAddress: itemAddress,
              minKg: minKg,
              itemSelectedImage: selectedProductImage,
              listOfCategory: listOfCategory,
            })
          }
        >
          <View style={tw`flex-row items-end w-52 py-4 pl-4 bg-[#faac2a]`}>
            <MaterialCommunityIcons
              name="cart-arrow-up"
              size={24}
              color="#fff"
              style={tw`pr-2`}
            />
            <Text style={tw`text-base text-[#223447] font-bold`}>Sell Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductDetail;
