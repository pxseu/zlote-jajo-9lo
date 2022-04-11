import React, { FC } from "react";
import { useQuestionCtx } from "../../hooks/useQuestion";
import Answer from "./Anwser";

const QuestionText: FC = () => {
	const state = useQuestionCtx();

	if (state.loading) {
		return <div>Loading...</div>;
	}

	if (state.error) {
		return <div>Error: {state.error.message}</div>;
	}

	return (
		<div className="flex flex-col p-4 px-12 justify-center items-center w-full">
			<h1 className="text-xl text-center max-w-full">
				Pytanie <code className="bg-gray-500/40 rounded-md px-1 break-words">#{state.question!.id}</code>
			</h1>
			<h1 className="text-2xl text-center mt-2">{state.question!.text}</h1>

			<div className="w-full">
				{state.question?.answers && state.question!.answers!.map((answer) => (
					<Answer key={answer.id} {...answer} />
				))}
			</div>

			<h3 className="text-xl mt-4 text-center text-red-500">Uwaga: Zapisz swoją odpowiedź na kartce.</h3>
		</div>
	);
};

export default QuestionText;
