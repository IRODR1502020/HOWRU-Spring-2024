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
							{/* TEMPORARILY REMOVING AS I IMPLEMENT CAROUSEL
							<h1 className="display-1 fw-bold text-center">HowRU.Life</h1>
							<h6 className="text-center">Feel better with just a tap.</h6> 
							*/}
							

							<div id="demo"></div>

								<div class="details" id="details-even">
									<div class="place-box">
										<div class="text">Switzerland Alps</div>
									</div>
									<div class="title-box-1"><div class="title-1">SAINT</div></div>
									<div class="title-box-2"><div class="title-2">ANTONIEN</div></div>
									<div class="desc">
										Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.
									</div>
									<div class="cta">
										<button class="bookmark">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
										>
											<path
											fill-rule="evenodd"
											d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
											clip-rule="evenodd"
											/>
										</svg>
										</button>
										<button class="discover">Discover Location</button>
									</div>
								</div>

								<div class="details" id="details-odd">
									<div class="place-box">
										<div class="text">Switzerland Alps</div>
									</div>
									<div class="title-box-1"><div class="title-1">SAINT </div></div>
									<div class="title-box-2"><div class="title-2">ANTONIEN</div></div>
									<div class="desc">
										Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.
									</div>
									<div class="cta">
										<button class="bookmark">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
										>
											<path
											fill-rule="evenodd"
											d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
											clip-rule="evenodd"
											/>
										</svg>
										</button>
										<button class="discover">Discover Location</button>
									</div>
								</div>

							{/* <div class="pagination" id="pagination">
								<div class="arrow arrow-left">
									<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 19.5L8.25 12l7.5-7.5"
									/>
									</svg>
								</div>

								<div class="progress-sub-container" >
									<div class="progress-sub-background" >
										<div class="progress-sub-foreground" ></div>
									</div>
								</div>
								<div class="slide-numbers" id="slide-numbers"></div>
							</div> */}
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