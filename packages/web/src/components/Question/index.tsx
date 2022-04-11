import { motion } from "framer-motion";
import React, { createContext, FC } from "react";
import { useParams } from "react-router-dom";
import { useQuestion } from "../../hooks/useQuestion";
import { GetPropsOfType } from "../../utils/type";
import { CardLikeThing } from "../commons";
import QuestionText from "./QuestionText";
import SetGid from "./SetGid";

export interface IQuestion {
	id: string;
	text: string;
	answers: {
		id: string;
		text: string;
	}[];
}

export const QuestionState = createContext<ReturnType<typeof useQuestion> | null>(null);

const Question: FC<GetPropsOfType<typeof motion.div>> = (props) => {
	const { id } = useParams();
	const question = useQuestion(id);

	return (
		<QuestionState.Provider value={question}>
			<CardLikeThing {...props}>
				{!question.gid && <SetGid />}
				{question.question && <QuestionText />}
			</CardLikeThing>
		</QuestionState.Provider>
	);
};

export default Question;
