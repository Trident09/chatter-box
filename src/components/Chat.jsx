import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";

const style = {
	main: `flex flex-col p-[10] relative`,
};

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const scroll = useRef();

	useEffect(() => {
		const q = query(collection(db, "messages"), orderBy("timestamp"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let messages = [];
			querySnapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setMessages(messages);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<>
			<main className={style.main}>
				{/* chat Message */}
                {messages.map((message) => (
                    <Message
                        key={message.id}
                        message={message}
                    />
                ))}
			</main>
			{/* Send Message */}
			<span ref={scroll}></span>
		</>
	);
};

export default Chat;
