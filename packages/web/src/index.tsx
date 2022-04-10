import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("__react-main");

if (!container) throw new Error("bruh");

ReactDOM.createRoot(container).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
