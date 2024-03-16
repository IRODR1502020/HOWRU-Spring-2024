import React from "react";
import "../../Styling/bootstrap.css"
import { Button, Typography, Link } from "@mui/material";
import Navbar from "../GeneralComponents/Navbar";
import Footer from "../GeneralComponents/Footer"
//import Carousel from "../GeneralComponents/Carousel.js";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SplashPage = () => {
	const navigate = useNavigate();

	return (
	
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-1 bg-primary-subtle">
				 <Navbar /> 
					<i className="bi bi-house"></i>
				</div>
				<div className="col-md-11">
					<div className="row">
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

					<div className="row p-5">
						<div className="col-md-12 py-5">
							<h1 className="display-1 fw-bold text-center">HowRU.Life</h1>
							<h6 className="text-center">Feel better with just a tap.</h6>
						</div>
					</div>
					<div>
					{/* <Carousel /> */}
					</div>
					<div className="row bg-light">
						<div className="col-md-6">
							<h3>What is HowRU.Life?</h3>
						</div>

						<div className="col-md-6">
							<h3>Features</h3>
						</div>
					</div>
				</div>
			</div>
			  <Footer />  
		</div>
		
	);
};

export default SplashPage;