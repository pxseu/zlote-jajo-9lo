import React, { FC } from "react";

const Answer: FC<{ text: string; id: string }> = ({ text, id }) => (
	<div className="w-full">
		<p className="break-words text-lg">
			<code className="bg-gray-500/40 px-1 rounded-md text-xl">{id}</code>. {text}
		</p>
	</div>
);

export default Answer;
