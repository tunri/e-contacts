export declare module "@mui/material/styles" {
	interface Theme {
		global: {
			wheel: React.CSSProperties["color"];
		};
	}

	interface ThemeOptions {
		global?: {
			wheel?: React.CSSProperties["color"];
		};
	}

	interface Palette {
		backdrop: Palette["primary"];
	}
	interface PaletteOptions {
		backdrop?: PaletteOptions["primary"];
	}
}
