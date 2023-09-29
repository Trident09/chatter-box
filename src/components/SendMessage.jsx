import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";
const style = {
	form: `h-14 w-full max-w-[720px] flex text-xl absolute bottom-0 p-3`,
	input: `w-full text-2xl p-3 bg-gray-900 text-white outline-none border-none cursor-pointer mr-1`,
	button: `w-[20%] bg-green-500 text-white cursor-pointer`,
};

const SendMessage = ({scroll}) => {
	const [input, setInput] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();
        if (input === "") {
            alert("Please type something");
            return;
        }
		const { uid, displayName } = auth.currentUser;
		await addDoc(collection(db, "messages"), {
			text: input,
			name: displayName,
			uid,
			timestamp: serverTimestamp(),
		});
        setInput("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<form
			onSubmit={sendMessage}
			className={style.form}
		>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className={style.input}
				type="text"
				placeholder="Message"
			/>
			<button
				className={style.button}
				type="submit"
			>
				Send
			</button>
		</form>
	);
};

export default SendMessage;
