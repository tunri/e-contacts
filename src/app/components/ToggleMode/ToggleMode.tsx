import { MODE, LIGHT, DARK } from "app/@types/mode-theme";

import { useTheme } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// assets
import IconLightMode from "@mui/icons-material/LightMode";
import IconDarkMode from "@mui/icons-material/DarkMode";
import useMode from "app/hooks/useMode";
import { useContext } from "react";
import AppContext from "app/context/AppContext";

interface Props {
	mode?: MODE;
}

const ToggleMode = ({ mode = LIGHT }: Props) => {
	// const { toggleMode, isLight } = useMode(mode);
	const theme = useTheme();
	const { toggleColorMode } = useContext(AppContext);

	const isLight = theme.palette.mode === "light";

	return (
		<Button onClick={toggleColorMode} size="large">
			<Typography
				component="span"
				variant="body1"
				mr={1}
				sx={{
					fontWeight: "bold",
					color: isLight ? "#1C212D" : "#FFd831",
				}}
			>
				{isLight ? "dark" : "light"}
			</Typography>
			{isLight ? (
				<IconDarkMode sx={{ color: "#1C212D" }} />
			) : (
				<IconLightMode sx={{ color: "#FFd831" }} />
			)}
		</Button>
	);
};

export default ToggleMode;
