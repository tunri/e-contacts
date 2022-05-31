import { PaletteMode, ThemeOptions } from "@mui/material";

// Options
import Palette from "./Palette";

const getTheme = (mode: PaletteMode): ThemeOptions => ({
	global: {
		wheel: "#FC7000",
	},
	palette: Palette(mode),
});

export default getTheme;
