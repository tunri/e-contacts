import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

// options ThemeOptions
import getTheme from "./ThemeOptions";

const memoCreateTheme = (mode: PaletteMode) => {
	return useMemo(() => createTheme(getTheme(mode)), [mode]);
};

export default memoCreateTheme;
