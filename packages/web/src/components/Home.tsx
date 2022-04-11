import React, { FC } from "react";
import { GetPropsOfType } from "../utils/type";
import { CardLikeThing } from "./commons";

const Home: FC<GetPropsOfType<typeof CardLikeThing>> = (props) => (
	<CardLikeThing {...props}>
		<div className="w-full mx-4 rounded-lg overflow-hidden">
			<img src={`${process.env.PUBLIC_URL}/assets/main.jpg`} alt="google logo" />
		</div>
	</CardLikeThing>
);

export default Home;
