import React, { createContext, FC } from "react";
import Header from "./components/Header";
import { motion, Variants } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Question from "./components/Question";

const LoadVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "backOut",
		},
	},
};

export const AppCtx = createContext(null);

const App: FC = () => (
	<Router>
		<div className="flex-grow flex items-center justify-center flex-col">
			<motion.div
				className="h-full w-full max-w-2xl m-4"
				animate="visible"
				initial="hidden"
				transition={{
					staggerChildren: 0.6,
				}}
			>
				<Header variants={LoadVariants} />

				<Routes>
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="/q/:id" element={<Question variants={LoadVariants} />} />
					<Route path="*" element={<h1>bruh</h1>} />
				</Routes>
			</motion.div>
		</div>
	</Router>
);

export default App;
