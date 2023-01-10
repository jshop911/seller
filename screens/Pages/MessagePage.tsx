import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';
import app, { auth, db } from '../../config/firebase/Firebase';
import tw from 'twrnc';

const MessagePage = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
	const [userName, setUserName] = useState("");
	const [photoURL, setPhotoURL] = useState("");
	// Explain
	let currentUserUID = app.auth().currentUser.uid;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL,
                        }}
                    />
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