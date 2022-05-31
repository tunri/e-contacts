import { useMemo, useState } from "react";
import { PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// Config
import { DARK, LIGHT } from "app/@types/mode-theme";
import memoCreateTheme from "app/theme/Theme";

import AppContext from "./AppContext";

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

const AppProvider = ({ children }: Props) => {
	const [mode, setMode] = useState<PaletteMode>(LIGHT);

	const actionsMode = useMemo(
		() => ({
			toggleTheme: () => {
				setMode((prevMode) => (prevMode === LIGHT ? DARK : LIGHT));
			},
		}),
		[]
	);

	const theme = memoCreateTheme(mode);

	return (
		<AppContext.Provider value={actionsMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</AppContext.Provider>
	);
};

export default AppProvider;
