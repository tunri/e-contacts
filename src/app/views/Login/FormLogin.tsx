// Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

const FormLogin = () => {
	return (
		<Card sx={{ width: "100%", p: 1 }} variant="outlined">
			<CardContent>
				<Typography variant="h6" component="h3" mb={1}>
					Welcome Back !
				</Typography>
				<Typography variant="body2" color="#A1A1A1">
					Become a member - you'll enjoy exclusive deals, offers,
					invites and rewards
				</Typography>
				<Divider light sx={{ mt: 2, mb: 3 }} />
				<Box component="form" noValidate autoComplete="off">
					<Stack spacing={3}>
						<TextField
							id="outlined-basic"
							label="Email"
							variant="filled"
						/>
						<TextField
							id="outlined-basic"
							label="Password"
							variant="filled"
						/>
					</Stack>
					<Button
						size="large"
						variant="contained"
						disableElevation
						fullWidth
						sx={{
							height: 48,
							mt: 3,
							bgcolor: "#FFd831",
							color: "#333",
							fontWeight: "bold",
						}}
					>
						Log in
					</Button>
					<Divider light sx={{ mt: 3, mb: 2 }} />
					<Typography
						variant="body2"
						color="#A1A1A1"
						sx={{ textAlign: "center" }}
					>
						Don't have an account?{" "}
						<Link
							href="#"
							underline="hover"
							sx={{ fontWeight: "bold", color: "primary.main" }}
						>
							Sign up
						</Link>
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default FormLogin;
