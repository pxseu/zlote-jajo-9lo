import { Router } from "express";
import { DANE } from "../../data/dane.js";
export const router = Router();
router.get("/question/:id", async (req, res) => {
    const { id } = req.params;
    if (typeof id !== "string")
        return res.status(400).json({
            success: false,
            data: null,
            message: "Invalid question id",
        });
    try {
        const { text, answers } = getQuestion(id);
        res.json({
            success: true,
            data: { id, text, answers },
        });
    }
    catch (err) {
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
router.use((_req, res) => res.status(404).json({
    success: false,
    data: null,
    message: "Not found",
}));
function getQuestion(id) {
    const element = DANE.find((question) => question.id === id);
    if (!element)
        throw new Error(`Question with id ${id} not found`);
    return element;
}
