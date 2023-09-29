import React from "react";
import { auth } from "../firebase";

const style = {
	button: `bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`,
};

const Logout = () => {
	return (
		<button
			onClick={() => auth.signOut()}
			className={style.button}
		>
			Logout
		</button>
	);
};

export default Logout;
