import { Router } from "express";
import { DANE, Qsts, Question } from "../../data/dane.js";
import { INTERNAL } from "../../utils/config.js";

export const router = Router();

router.get("/question/all-internal-use-only", (_req, res, next) => {
	if (!INTERNAL) return next();

	res.json({
		success: true,
		data: DANE.map(({ questions, num }) =>
			Array.isArray(questions)
				? questions.map(({ id, text, correct }) => ({ question: `${num}-${id}`, text, correct }))
				: questions,
		),
	});
});

router.get("/question/:qid", (req, res) => {
	const { qid } = req.params;
	const { gid } = req.query;

	if (typeof qid !== "string")
		return res.status(400).json({
			success: false,
			data: null,
			message: "Invalid question id",
		});

	if (typeof gid !== "string" || isNaN(Number(gid)) || Number(gid) < 1)
		return res.status(400).json({
			success: false,
			data: null,
			message: "Invalid group id",
		});

	try {
		const { id, text, answers, media } = getQuestion(qid, Number(gid));

		res.json({
			success: true,
			data: { id, text, answers, media: media || false },
		});
	} catch (err) {
		if (err instanceof Error)
			return res.status(400).json({
				success: false,
				data: null,
				message: err.message,
			});

		return res.status(500).json({
			success: false,
			data: null,
			message: "Internal server error",
		});
	}
});

router.use((_req, res) =>
	res.status(404).json({
		success: false,
		data: null,
		message: "Not found",
	}),
);

function getQuestion(qid: string, gid: number) {
	const element = DANE.find((question) => question.id === qid);

	if (!element) throw new Error(`Question with id ${qid} not found`);

	if (!Array.isArray(element.questions))
		return { ...element.questions, id: `${element.num}-${element.questions.id}` };

	const sub = element.questions.find((quest) => quest.id === ((gid - 1) % 3) + 1) as Qsts;

	if (!sub) throw new Error(`Invalid sub question`);

	return { ...sub, id: `${element.num}-${sub.id}` };
}
