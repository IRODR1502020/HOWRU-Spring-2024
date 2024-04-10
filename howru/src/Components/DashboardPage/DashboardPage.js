import React from 'react';
import "../../Styling/bootstrap.css"
import Bootstrap from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import "./DashboardPageStyling/DashboardPageStyling.scss";
import AuthServiceInstance from "../GeneralComponents/AuthService.js";
import RestYourMindPage from '../RestYourMindPage/RestYourMindPage.js'

const DashboardPage = () => {
	const navigate = useNavigate();
	

	

	
	return (
		<SkeletonForAllPages>
			
			<Box>
				<button type="button" onClick={() => navigate('/restyourmind')}> Rest My Mind </button>
			</Box>
			
			
			<section className="musicSection">
				<div className="card-grid">
					<div className="card" style={{backgroundColor: '#d4a373'}}>
						<h3 className="card_heading">
							Coffee Shop
						</h3>
						<audio controls></audio>
					</div>
					<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1539706173505-888cd1746ac7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
						<h3 className="card_heading">
							Campfire
						</h3>
						<audio controls src="./audio/campFire.aiff"></audio>
					</div>
					<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
						<h3 className="card_heading">
							Ocean
						</h3>
						<audio controls src="./audio/seasideWaves.wav"></audio>
					</div>
					<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1618329397023-cc688d12bb79?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
						<h3 className="card_heading">
							Thunder Storm
						</h3>
						<audio controls></audio>
					</div>
					<div className="card" style={{backgroundColor: '#3a5a40'}}>
						<h3 className="card_heading">
							Jungle
						</h3>
						<audio controls></audio>
					</div>
					<div className="card" style={{backgroundColor: '#0077b6'}}>
					<h3 className="card_heading">
						Ocean
					</h3>
					<audio controls></audio>
					</div>
					<div className="card" style={{backgroundColor: '#03045e'}}>
					<h3 className="card_heading">
						Thunder Storm
					</h3>
					<audio controls></audio>
					</div>
				</div>
			</section>


		</SkeletonForAllPages>
		
	);
	
}

export default DashboardPage;