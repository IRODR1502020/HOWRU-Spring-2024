import React from "react";
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import Carousel from 'react-bootstrap/Carousel';
import MembershipSection from "./MembershipSection";
import Footer from "../GeneralComponents/Footer"
import Bootstrap, { Container, Row, Col } from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button, Typography, Link } from "@mui/material";
import "./SplashPageStyling/SplashPageStyling.scss";
import "../../Styling/bootstrap.css"


const SplashPage = () => {
	const navigate = useNavigate();

	const navbarStyle = {
		backgroundColor: "#ecf3fe",
	}

	const buttonPurpleBackground = {
		backgroundImage : "linear-gradient(135deg, rgb(83, 64, 203) 0%, rgb(137, 70, 163) 100%)",
		color: "#FFF",
		padding: "20px",
		borderRadius: "24px",
		boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}

	const createAccountButton = {
		borderRadius: "24px",
		boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}
	
	return (
		<SkeletonForAllPages>
			<div className="container-fluid p-0">
				{/* <div className="row">
					<div className="col-md-12">
						<div className="row p-4">
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
				</div> */}
				<div className="row p-0">
					<div className="row p-0">
						<div className="customCarousel">
							<img src="https://images.unsplash.com/photo-1711139299064-f60e2753163f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="stones" />
						</div>
					</div>

					<div className="row">
						<div className="col-md-6 darkBlueBG p-5">
							<h3 className="display-4">What is HowRU.Life?</h3>
							<p>
								HOWRU.Life is an innovative application designed to assist in the management of stress and anxiety. 
								The application offers a variety of features, including a daily mood diary, where you can document your emotional state through responses to carefully curated questions. Furthermore, HOWRU.Life also provides immediate access to guided breathing exercises, offering an effective solution for instant anxiety relief. 
								The multifaceted tool serves as your personalized ally in mental health maintenance and immediate stress reduction.
							</p>
						</div>

						<div className="col-md-6 darkBlueBG p-5">
						</div>
					</div>


					<div className="row p-0">
						<div className="customCarousel">
						<img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6 blueBG p-5">

						</div>

						<div className="col-md-6 blueBG p-5">
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
					<MembershipSection/>
				</div>
			</div>
		</SkeletonForAllPages>
		
	);
};

export default SplashPage;