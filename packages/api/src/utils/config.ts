export const DEV_MODE = process.env.NODE_ENV === "development";
export const PORT = process.env.PORT || "8081";
export const INTERNAL = DEV_MODE || Boolean(process.env.INTERNAL_USE || 0);
