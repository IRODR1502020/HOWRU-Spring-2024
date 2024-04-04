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
import MembershipSection from "./MembershipSection";


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
							HOWRU.Life is an innovative application designed to assist in the management of stress and anxiety. 
							The application offers a variety of features, including a daily mood diary, where you can document your emotional state through responses to carefully curated questions. Furthermore, HOWRU.Life also provides immediate access to guided breathing exercises, offering an effective solution for instant anxiety relief. 
							The multifaceted tool serves as your personalized ally in mental health maintenance and immediate stress reduction.
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

					<MembershipSection />
				</div>
			</div>
		</SkeletonForAllPages>
		
	);
};

export default SplashPage;