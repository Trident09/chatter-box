import React from "react";
import NavBar from "./components/NavBar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

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
        <Chat />
			</section>
		</div>
	);
}

export default App;
