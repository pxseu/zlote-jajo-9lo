import { useContext, useEffect, useReducer, useState } from "react";
import { IQuestion, QuestionState } from "../components/Question";
import { API_URL } from "../utils/config";

interface State {
	question: IQuestion | null;
	loading: boolean;
	error: Error | null;
	selected: string | null;
}

type Action =
	| {
			type: "SET_QUESTION";
			payload: IQuestion;
	  }
	| {
			type: "SET_ERROR";
			payload: Error;
	  }
	| {
			type: "SET_SELECTED";
			payload: string;
	  };

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SET_QUESTION":
			return {
				...state,
				question: action.payload,
				loading: false,
				error: null,
			};
		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
				loading: false,
				question: null,
				selected: null,
			};

		case "SET_SELECTED":
			return {
				...state,
				selected: action.payload,
			};

		default:
			return state;
	}
};
export const useQuestion = (id?: string) => {
	const [idQuestion, setIdQuestion] = useState<string | null>(null);
	const [state, dispatch] = useReducer(reducer, {
		question: null,
		loading: true,
		error: null,
		selected: null,
	});

	useEffect(() => {
		if (id && id !== idQuestion) setIdQuestion(id);
	}, [id, idQuestion]);

	useEffect(() => {
		if (!idQuestion) return;

		let mounted = true;
		const fetchData = async () => {
			try {
				const response = await fetch(`${API_URL}/v1/question/${idQuestion}`);

				const { data, message } = await response.json();

				if (!response.ok) throw new Error(message || response.statusText);

				if (mounted)
					dispatch({
						type: "SET_QUESTION",
						payload: data,
					});
			} catch (err) {
				if (mounted && err instanceof Error)
					dispatch({
						type: "SET_ERROR",
						payload: err,
					});
			}
		};
		fetchData();

		return () => {
			mounted = false;
		};
	}, [idQuestion]);

	return {
		...state,
		selectAnswer: (answer: string) =>
			dispatch({
				type: "SET_SELECTED",
				payload: answer,
			}),
	};
};

export const useQuestionCtx = () => {
	const ctx = useContext(QuestionState);

	if (!ctx) throw new Error("useQuestionCtx must be used within a QuestionProvider");

	return ctx;
};
