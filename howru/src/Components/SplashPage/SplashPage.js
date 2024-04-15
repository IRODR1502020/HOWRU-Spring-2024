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
import logo from "../../Assets/logo.png"

const SplashPage = () => {
	const navigate = useNavigate();

	const navbarStyle = {
		backgroundColor: "#ecf3fe",
	}

	const logoStyle = {
		height: "300px",
		width: "auto",
	}

	const logoContainer = {
		display: "flex",
		height: "700px",
		alignItems: "center",
		justifyContent: "center"
	}

	const featureContainer = {
		display: "flex",
		alignItems: "center",
		justifyContent: "right",
		flexDirection: "column"
	}

	const buttonPurpleBackground = {
		backgroundImage : "linear-gradient(135deg, rgb(83, 64, 203) 0%, rgb(137, 70, 163) 100%)",
		color: "#FFF",
		padding: "20px",
		borderRadius: "24px",
		boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}

	return (
		<SkeletonForAllPages>
			<div className="container-fluid p-0">
				<div className="row p-0">
					<div className="row p-0">
						<div className="jumbotron p-0">
							<img className="jumbotron-image" src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="stones" />
							<div className="jumbotron-text">HowRU</div>
						</div>
					</div>

					<div className="row darkBlueBG " style={logoContainer}>
						<div className="col-md-6 p-5 text-light">
							<h3 className="display-4">What is HowRU.Life?</h3>
							<p>
								HOWRU.Life is an innovative application designed to assist in the management of stress and anxiety. 
								The application offers a variety of features, including a daily mood diary, where you can document your emotional state through responses to carefully curated questions. Furthermore, HOWRU.Life also provides immediate access to guided breathing exercises, offering an effective solution for instant anxiety relief. 
								The multifaceted tool serves as your personalized ally in mental health maintenance and immediate stress reduction.
							</p>
						</div>

						<div className="col-md-6 darkBlueBG p-5">
							<img src={logo} alt="logo" style={logoStyle} />
						</div>
					</div>

					<div className="row p-0">
						<div className="customCarousel">
							<img src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="carousel image" />
							<svg className="curve" viewBox="0 0 425 300">
    <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55C207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
    <text x="25">
        <textPath xlinkHref="#curve">
            HOWRU HOWRU HOWRU HOWRU HOWRU HOWRU HOWRU HOWRU HOWRU HOWRU
        </textPath>
    </text>
</svg>

						</div>
					</div>

					<div className="row p-0">

						<div className="col-md-12 blueBG p-5 text-light p-0" style={featureContainer}>
							<h3 className="display-4 text-center">Features</h3>

							<div className="container">
								<div className="row">
									<div className="col-md-4">Help Us Help YOU</div>
									<div className="col-md-4">Focus</div>
									<div className="col-md-4">Meditate</div>
								</div>
							</div>
						</div>
					</div>
					<MembershipSection/>
				</div>
			</div>
		</SkeletonForAllPages>
		
	);
};

export default SplashPage;