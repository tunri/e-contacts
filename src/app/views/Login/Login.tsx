import { useTheme } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import FormLogin from "./FormLogin";
// Assets
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import ToggleMode from "app/components/ToggleMode/ToggleMode";

const Login = () => {

	return (
		<Paper
			sx={{
				height: "100vh",
				minHeight: "580px",
				display: "flex",
				alignItems: "center",
			}}
			square
			elevation={0}
		>
			<Container maxWidth="xs" component="main">
				<Box>
					<Box
						sx={{
							position: "absolute",
							top: "1rem",
							right: "1rem",
						}}
					>
						<ToggleMode />
					</Box>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="center"
						spacing={2}
						mb={3}
					>
						<Avatar sx={{ backgroundColor: "#1C212D" }}>
							<ContactsOutlined sx={{ color: "#FFd831" }} />
						</Avatar>
						<Typography component="h1" variant="h5">
							E-Contacts
						</Typography>
					</Stack>
					<FormLogin />
				</Box>
			</Container>
		</Paper>
	);
};

export default Login;
