import React from "react";
import "../../Styling/bootstrap.css"
import { Button, Typography, Link } from "@mui/material";
import Bootstrap from 'react-bootstrap';
import Navbar from "../GeneralComponents/Navbar";
import Footer from "../GeneralComponents/Footer"
//import Carousel from "../GeneralComponents/Carousel.js";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import "./SplashPageStyling/SplashPageStyling.scss";
import Carousel from 'react-bootstrap/Carousel';


const SplashPage = () => {
	const navigate = useNavigate();


	const navbarStyle = {
		"background-color": "#ecf3fe",
	}

	const buttonPurpleBackground = {
		"background-image" : "linear-gradient(135deg, rgb(83, 64, 203) 0%, rgb(137, 70, 163) 100%)",
		color: "#FFF",
		padding: "20px",
		"border-radius": "24px",
		"box-shadow": "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}

	const createAccountButton = {
		"border-radius": "24px",
		"box-shadow": "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}
	
	return (
		<SkeletonForAllPages>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<div className="row" className="p-4">
							<Typography variant="body2" align="right">
								<Link component={RouterLink} to="/login" underline="hover" className="p-2 m-2" style={ buttonPurpleBackground }>
									Sign in
								</Link>
								<Link component={RouterLink} to="/register" underline="hover" className="p-2 m-2" style={createAccountButton}>
									Create account
								</Link>
							</Typography>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="row">
					<Carousel className="customCarousel">
						<Carousel.Item className="carousel-image">
							<img src="https://images.unsplash.com/photo-1444312645910-ffa973656eba?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
						</Carousel.Item>
						<Carousel.Item className="carousel-image">
							<img src="https://images.unsplash.com/photo-1458441087617-24d758e383f1?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
						</Carousel.Item>
						<Carousel.Item className="carousel-image">
							<img src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
						</Carousel.Item>
					</Carousel>

					</div>

					<div className="row">
						<div className="col-md-6 bg-light p-5">
							<h3 className="display-4">What is HowRU.Life?</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula nibh id arcu feugiat, id gravida eros finibus. Suspendisse potenti. Nunc vel commodo nulla, ac dignissim nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer non purus eget sapien rhoncus suscipit. Fusce aliquet risus quis nulla lobortis, vitae tincidunt mi convallis. Integer vehicula purus quis felis consectetur, in condimentum nisi tincidunt. Integer rhoncus lectus a risus feugiat, vel ullamcorper felis viverra. Vivamus at dui vitae sem malesuada faucibus a eget ligula. Donec sed est vitae magna commodo aliquam ut sit amet leo. Duis vel ex eu justo consequat tempor. Nulla ornare mi nec mi fermentum bibendum.
							</p>
							<p>
								Maecenas non elit at turpis suscipit feugiat. Integer id erat vitae ligula ultricies aliquam. Curabitur vulputate, ligula sit amet luctus tincidunt, lorem tortor malesuada lorem, in malesuada dui mi nec felis. Phasellus in enim quis est lobortis tincidunt eu et ante. Vivamus sit amet ligula sed mi efficitur suscipit. Vivamus vel quam eget velit tempor congue. Sed bibendum dui odio, vel vestibulum lacus laoreet id. Mauris non luctus ante. Vivamus vel nisl a justo vestibulum varius eget et purus. Vivamus id massa ac sapien placerat auctor eget nec justo. Integer hendrerit lacinia diam, et iaculis sapien venenatis sit amet. Vivamus viverra vehicula libero vel efficitur. Nam nec tristique justo.
							</p>

						</div>

						<div className="col-md-6 p-5">
							<h3 className="display-4">Features</h3>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">An item</li>
								<li className="list-group-item">A second item</li>
								<li className="list-group-item">A third item</li>
								<li className="list-group-item">A fourth item</li>
								<li className="list-group-item">And a fifth one</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</SkeletonForAllPages>
		
	);
};

export default SplashPage;