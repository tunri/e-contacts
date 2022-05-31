import { PaletteMode, PaletteOptions } from "@mui/material";
import { LIGHT } from "app/@types/mode-theme";
import modeDark from "./modes/Dark";
import modeLight from "./modes/Light";

const getPaletteMode = (mode: PaletteMode): PaletteOptions => {
	return mode === LIGHT ? modeLight : modeDark;
};

const Palette = (mode: PaletteMode): PaletteOptions => {
	return {
		mode,
		...getPaletteMode(mode),
	};
};

export default Palette;
