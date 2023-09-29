import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import NavBar from "./components/NavBar";
import { auth } from "./firebase";

const style = {
	appContainer: `max-w-[720px] mx-auto text-center mt-10`,
	sectionContainer: `flex flex-col h-[90vh] bg-gray-100 ml-10 shadow-xl border relative`,
};

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className={style.appContainer}>
			<section className={style.sectionContainer}>
				{/* navbar */}
				<NavBar />
				{/* Chatbox */}
				{user ? (
					<Chat />
				) : (
					<h1 className="text-2xl text-red-500 my-10 capitalize font-medium font-mono">
						You need to login to use this app
					</h1>
				)}
			</section>
		</div>
	);
}

export default App;
