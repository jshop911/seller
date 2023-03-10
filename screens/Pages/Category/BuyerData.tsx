import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../../config/firebase/Firebase";

export default function BuyerData() {
  const [DATA, setData] = useState();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  // let currentUserUID = app.auth().currentUser.uid;
  useEffect(() => {
    getDisplayData();
  }, []);

  const getDisplayData = () => {
    const getDataFromFirebase = [];
    const sub = db.collection("postedItem").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getDataFromFirebase.push({ ...doc.data(), id: doc.id, key: doc.id });
      });
      setData(getDataFromFirebase);
      setLoading(false);
    });
  };

  return (
    <View style={tw`flex items-center self-center h-95 mb-120`}>
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={tw`flex-row p-2`}>
            <View style={tw`w-40 bg-gray-200 p-2 rounded shadow-md`}>
              <Pressable
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
                onPress={() =>
                  navigation.navigate("ProductDetail", {
                    itemId: item.id,
                    itemName: item.productName,
                    itemDealPrice: item.dealPrice,
                    itemUsername: item.userName,
                    itemProductDesc: item.productDesc,
                    itemAddress: item.address,
                    minKg: item.minKg,
                    itemSelectedImage: item.selectedProductImage,
                    listOfCategory: item.listOfCategory,
                  })
                }
              >
                <Image
                  style={tw`w-36 h-35 rounded px-2 border-solid border-2 border-gray-400`}
                  source={{
                    uri: item.selectedProductImage,
                  }}
                />
              </Pressable>
              <Text style={tw`text-sm text-gray-700 text-center font-bold`}>
                {item.productName}
              </Text>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-xs text-gray-600 font-bold`}>
                  Deal Price:
                </Text>
                <Text style={tw`text-base text-[#faac2a] font-bold ml-5`}>
                  {item.dealPrice} Php
                </Text>
              </View>

              <View style={tw`flex-row items-center pt-2`}>
                <MaterialCommunityIcons
                  name="store-marker-outline"
                  size={20}
                  color={"#223447"}
                />
                <Text
                  style={tw`text-xs text-gray-500 font-bold pl-2 w-35 h-12`}
                >
                  {item.address}
                </Text>
              </View>

              <Pressable
                onPress={() =>
                  navigation.navigate("SellNow", {
                    itemId: item.id,
                    itemName: item.productName,
                    itemDealPrice: item.dealPrice,
                    itemUsername: item.userName,
                    itemProductDesc: item.productDesc,
                    itemAddress: item.address,
                    minKg: item.minKg,
                    itemSelectedImage: item.selectedProductImage,
                    listOfCategory: item.listOfCategory,
                  })
                }
              >
                <View style={tw`p-2 mt-2 bg-[#faac2a] rounded shadow-md`}>
                  <Text style={tw`text-sm text-center text-gray-900 font-bold`}>
                    Sell Now
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}
