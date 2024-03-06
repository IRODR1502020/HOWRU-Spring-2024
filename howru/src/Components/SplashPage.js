import React from "react";
import { Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const SplashPage = () => {
	const navigate = useNavigate();

	return (

	<div>
		<Typography variant="body2" align="center" sx={{ mt: 2 }}>
				I'm a member already!{" "}
			<Link component={RouterLink} to="/login" underline="hover">
				Sign in.
			<br />
			</Link>
				Don't have an account yet? {" "}
			<Link component={RouterLink} to="/register" underline="hover">
				Create one!
			</Link>
		</Typography>
	</div>

	);
};

export default SplashPage;