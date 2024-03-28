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
import "./SplashPageStyling/SplashPageStyling.scss"
import { Carousel } from "react-bootstrap";

const SplashPage = () => {
	const navigate = useNavigate();


	const navbarStyle = {
		"background-color": "#ecf3fe",
	}

	
	return (
		<SkeletonForAllPages>
			<div className="container">
				<div className="col-md-12">
					<div className="row" className="p-4">
						<Typography variant="body2" align="right">
							<Link component={RouterLink} to="/login" underline="hover" className="p-2">
								Sign in
							</Link>
							<Link component={RouterLink} to="/register" underline="hover" className="p-2">
								Create account
							</Link>
						</Typography>
					</div>
				</div>

				<div className="row">
					<div className="row">
						{/* START OF CAROUSEL/HEADER */}
						<div className="col-md-12 customCarousel">
						<Carousel>
							<Carousel.Item>
								<h1>First Slide</h1>
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<h1>Second Slide</h1>
								<Carousel.Caption>
									<h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<h1>Third Slice</h1>
								<Carousel.Caption>
									<h3>Third slide label</h3>
									<p>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
						</div>
						{/* END OF CAROUSEL/HEADER */}
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