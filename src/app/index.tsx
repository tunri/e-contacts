import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Config
import Theme from "./theme/Theme";
import AppContext from "./context/AppContext";
import { DARK, LIGHT, MODE } from "./@types/mode-theme";

// Components
import Login from "./views/Login/Login";

const App = () => {
	const [mode, setMode] = useState<"light" | "dark">("light");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) =>
					prevMode === "light" ? "dark" : "light"
				);
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<AppContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Login />
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export default App;
