import React, { FC } from "react";
import { motion } from "framer-motion";
import { GetPropsOfType } from "../utils/type";

export const CardLikeThing: FC<GetPropsOfType<typeof motion.div>> = ({ className, ...props }) => (
	<motion.div
		className={`flex justify-center items-center mx-4 my-6  py-4 bg-white/80 backdrop-blur-sm rounded-lg w-100 shadow-lg ${
			className ? className : ""
		}`}
		{...props}
	/>
);
