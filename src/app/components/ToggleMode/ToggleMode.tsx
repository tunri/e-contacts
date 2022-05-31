import { useContext } from "react";
import { useTheme } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// assets
import IconLightMode from "@mui/icons-material/LightMode";
import IconDarkMode from "@mui/icons-material/DarkMode";
import AppContext from "app/context/AppContext";

import { LIGHT } from "app/@types/mode-theme";

const ToggleMode = () => {
	const {
		palette: { mode },
	} = useTheme();
	const { toggleTheme } = useContext(AppContext);

	const isLight = mode === LIGHT;

	return (
		<Button onClick={toggleTheme} size="large" disableRipple>
			<Typography
				component="span"
				variant="body1"
				mr={1}
				sx={{
					fontWeight: "bold",
					color: "text.primary",
				}}
			>
				{isLight ? "dark" : "light"}
			</Typography>
			{isLight ? (
				<IconDarkMode sx={{ color: "text.primary" }} />
			) : (
				<IconLightMode />
			)}
		</Button>
	);
};

export default ToggleMode;
