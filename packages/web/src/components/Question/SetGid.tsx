import React, { useState, useEffect, FC } from "react";
import { useQuestionCtx } from "../../hooks/useQuestion";

const QuestionText: FC = () => {
	const state = useQuestionCtx();
    const [localId, setLocalId] = useState("")

	useEffect(() => {
		console.log(state)
	}, [state])

	if (state.gid !== null) {
		return null;
	}

	return (
		<div className="flex flex-col p-4 px-12 justify-center items-center w-full">
			<h1 className="text-xl text-center max-w-full">
				Wprowadź numer grupy:
			</h1>

        <input type="number" onChange={(event) => setLocalId(event.target.value)} value={localId} />

        <button onClick={() => {
			state.setGid(localId)
		}}>
            Zatwierdź
        </button>

		{state.error && <h3 className="text-xl mt-4 text-center text-red-500">Błąd: {state.error.message}.</h3>}

		</div>
	);
};

export default QuestionText;