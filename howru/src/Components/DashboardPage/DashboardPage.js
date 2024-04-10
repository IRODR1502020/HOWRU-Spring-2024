import React from 'react';
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import Bootstrap from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Styling/bootstrap.css"
import "./DashboardPageStyling/DashboardPageStyling.scss";


const DashboardPage = () => {
	const navigate = useNavigate();
	
	return (
		<SkeletonForAllPages>
		
		<div className="menu">
			<button className="menu-button" type="button" onClick={() => navigate('/check-in')}> Daily Check-in </button>
			<button className="menu-button" type="button" onClick={() => navigate('/ambientmusic')}> Ambient Music </button>
			<button className="menu-button" type="button" onClick={() => navigate('/restyourmind')}> Meditative Techniques </button>
			<button className="menu-button" type="button" onClick={() => navigate('/roadmap')}> De-Stress My Life Roadmap </button>
			
		</div>

		</SkeletonForAllPages>
		
	);
	
}

export default DashboardPage;