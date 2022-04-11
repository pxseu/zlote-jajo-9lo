import React, { FC } from "react";
import { useQuestionCtx } from "../../hooks/useQuestion";

const QuestionText: FC = () => {
	const state = useQuestionCtx();

	if (state.gid !== null) {
		return null;
	}

	return (
		<form
			action="/"
			onSubmit={(e) => {
				e.preventDefault();

				state.setGid((e.currentTarget[0] as HTMLInputElement).value);
			}}
		>
			<div className="flex flex-col p-4 px-12 justify-center items-center w-full">
				<h1 className="text-xl text-center max-w-full">Wprowadź numer swojej grupy:</h1>

				<input className="rounded-lg w-full p-2 mt-2 outline-none" type="number" />

				<button
					className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 outline-none"
					type="submit"
				>
					Zatwierdź
				</button>

				{state.error && <h3 className="text-xl mt-4 text-center text-red-500">Błąd: {state.error.message}.</h3>}
			</div>
		</form>
	);
};

export default QuestionText;
