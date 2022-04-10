import Express from "express";
import { router } from "./routes/index.js";
import { PORT } from "./utils/config.js";

const app = Express();

app.set("trust proxy", 1);

app.use(router);

await new Promise((resolve) => app.listen(Number(PORT), () => resolve(null)));
console.log(`Listening on port ${PORT}`);
