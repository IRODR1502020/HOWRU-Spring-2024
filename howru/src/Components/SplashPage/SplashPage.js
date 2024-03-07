import React from "react";
import { Button, Typography, Link } from "@mui/material";
import Navbar from "../GeneralComponents/Navbar";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import "../../Styling/bootstrap.css"
import Footer from "../GeneralComponents/Footer"

const SplashPage = () => {
	const navigate = useNavigate();

	return (
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-1 p-0">
					<Navbar />
					<i class="bi bi-house"></i>
				</div>
				<div class="col-md-11">
					<div class="row">
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

					<div class="row p-5">
						<div class="col-md-12 py-5">
							<h1 class="display-1 fw-bold text-center">HowRU.Life</h1>
							<h6 class="text-center">Feel better with just a tap.</h6>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SplashPage;