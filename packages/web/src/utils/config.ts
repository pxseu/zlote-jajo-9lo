export const PRODUCTION = process.env.REACT_APP_ENV?.toLowerCase() === "production";
export const API_URL = PRODUCTION ? "https://api-9lo-zagadka.pxseu.com" : "http://localhost:8081";
export const MEDIA_URL = (type: "image" | "video", id: string) =>
	`https://cdn.pxseu.com/9lo-zlote-jajo/${id}.${type === "image" ? "png" : "mp4"}`;
