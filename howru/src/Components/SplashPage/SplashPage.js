import React from "react";
import "../../Styling/bootstrap.css"
import { Button, Typography, Link } from "@mui/material";
import Bootstrap from 'react-bootstrap';
import Navbar from "../GeneralComponents/Navbar";
import Footer from "../GeneralComponents/Footer"
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const SplashPage = () => {
	const navigate = useNavigate();


	const navbarStyle = {
		"background-color": "#ecf3fe",
	}

	return (
	
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-2 fixed-top vh-100" style={navbarStyle}>
				 <Navbar /> 
				</div>
			</div>

			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-10 m-0">
					<div className="row">
						<Typography variant="body2" align="right">
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
					<div className="row m-0">
						<div className="row">
							<div className="col-md-12">
								<h1 className="display-1 fw-bold text-center">HowRU.Life</h1>
								<h6 className="text-center">Feel better with just a tap.</h6>
							</div>
						</div>

						<div className="row bg-light">
							<div className="col-md-6">
								<h3>What is HowRU.Life?</h3>
								<p>
  									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula nibh id arcu feugiat, id gravida eros finibus. Suspendisse potenti. Nunc vel commodo nulla, ac dignissim nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer non purus eget sapien rhoncus suscipit. Fusce aliquet risus quis nulla lobortis, vitae tincidunt mi convallis. Integer vehicula purus quis felis consectetur, in condimentum nisi tincidunt. Integer rhoncus lectus a risus feugiat, vel ullamcorper felis viverra. Vivamus at dui vitae sem malesuada faucibus a eget ligula. Donec sed est vitae magna commodo aliquam ut sit amet leo. Duis vel ex eu justo consequat tempor. Nulla ornare mi nec mi fermentum bibendum.
								</p>
								<p>
  									Maecenas non elit at turpis suscipit feugiat. Integer id erat vitae ligula ultricies aliquam. Curabitur vulputate, ligula sit amet luctus tincidunt, lorem tortor malesuada lorem, in malesuada dui mi nec felis. Phasellus in enim quis est lobortis tincidunt eu et ante. Vivamus sit amet ligula sed mi efficitur suscipit. Vivamus vel quam eget velit tempor congue. Sed bibendum dui odio, vel vestibulum lacus laoreet id. Mauris non luctus ante. Vivamus vel nisl a justo vestibulum varius eget et purus. Vivamus id massa ac sapien placerat auctor eget nec justo. Integer hendrerit lacinia diam, et iaculis sapien venenatis sit amet. Vivamus viverra vehicula libero vel efficitur. Nam nec tristique justo.
								</p>

							</div>

							<div className="col-md-6">
								<h3>Features</h3>
							</div>
						</div>
					</div>
					<Footer />  
				</div>
			</div>
		</div>
		
	);
};

export default SplashPage;