import { Router } from "express";
import { DANE, Question } from "../../data/dane.js";

export const router = Router();

router.get("/question/:qid", async (req, res) => {
	const { qid } = req.params;
	const { gid } = req.query;

	if (typeof qid !== "string")
		return res.status(400).json({
			success: false,
			data: null,
			message: "Invalid question id",
		});
	
	if (typeof gid !== "string" || isNaN(Number(gid)))
		return res.status(400).json({
			success: false,
			data: null,
			message: "Invalid group id",
		});
	

	try {
		const { text, answers } = getQuestion(qid, Number(gid));

		res.json({
			success: true,
			data: { text, answers },
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

	const sub = DANE[gid % 3];
	
	if (!sub) throw new Error(`Invalid sub question`);
	
	return sub;
}
