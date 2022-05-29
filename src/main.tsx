import React from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";

import "assets/styles/styles.scss";

import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CssBaseline>
			<App />
		</CssBaseline>
	</React.StrictMode>
);
