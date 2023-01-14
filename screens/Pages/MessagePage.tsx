import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';
import app, { auth, db } from '../../config/firebase/Firebase';
import tw from 'twrnc';

const MessagePage = ({ navigation, route }) => {
    const [messages, setMessages] = useState([]);
	const [userName, setUserName] = useState("");
	const [photoURL, setPhotoURL] = useState("");
	// Explain
	let currentUserUID = app.auth().currentUser.uid;

    const {
        itemUsername,
      } = route?.params || {};

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={tw`flex-row self-center`}>
                    <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL|| "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAi1_6yGhUnU-y3n67_jHqQHlk02DE9MMAdKYj11g0nFWJToV8oN8PQWlgc0W20vQ6Gw&usqp=CAU"
                        }}
                    />
                    <Text style={tw`self-center pl-2 text-lg font-bold`}>{itemUsername}</Text>
                </View>
            ),
        })

        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
				// Explain
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user
            }))
        ));

        return () => {
          unsubscribe();
        };

    }, [navigation]);

    const onSend = useCallback((messages = []) => {
        const { _id, createdAt, text, user,} = messages[0]

        addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
    }, []);

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}
        />
    );
}

export default MessagePage;