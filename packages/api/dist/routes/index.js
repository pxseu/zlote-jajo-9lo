import morgan from "morgan";
import cors from "cors";
import { json, Router } from "express";
import { DEV_MODE } from "../utils/config.js";
import { router as v1 } from "./v1/index.js";
export const router = Router();
router.use(morgan(DEV_MODE ? "dev" : "common"));
router.use(cors());
router.use(json());
router.use((err, _req, res, next) => {
    if (!err)
        return next();
    let message = "Internal server error";
    if (err instanceof SyntaxError)
        message = err.message;
    res.status(400).json({
        success: false,
        data: null,
        message,
    });
});
router.use("/v1", v1);
router.use((_res, res) => res.status(404).json({
    success: false,
    data: null,
    message: "Not found",
}));
