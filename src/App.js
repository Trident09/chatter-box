import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import NavBar from "./components/NavBar";
import { auth } from "./firebase";

const style = {
	appContainer: `max-w-[720px] mx-auto text-center mt-10 justify-center fixed top-0 left-0 right-0 bottom-0`,
	sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mx-10 shadow-xl border relative rounded-xl overflow-hidden border-gray-200 border-opacity-50`,
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
