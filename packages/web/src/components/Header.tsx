import React, { FC } from "react";
import { motion } from "framer-motion";
import { GetPropsOfType } from "../utils/type";

const Header: FC<GetPropsOfType<typeof motion.header>> = (props) => (
	<motion.header
		className="flex justify-center items-center mx-4 my-6  py-4 bg-white/80 backdrop-blur-sm rounded-lg w-100 shadow-lg"
		{...props}
	>
		<h1 className="text-center text-4xl px-4 py-2">Zagadka Złotego Jajka</h1>
	</motion.header>
);

export default Header;
