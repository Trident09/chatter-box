import React, { useRef } from "react";
import Message from "./Message";

const style = {
	main: `flex flex-col p-[10] relative`,
};

const Chat = () => {
	const scroll = useRef();
	return (
		<>
			<main className={style.main}>
                {/* chat Message */}
                <Message />
            </main>
			{/* Send Message */}
			<span ref={scroll}></span>
		</>
	);
};

export default Chat;
