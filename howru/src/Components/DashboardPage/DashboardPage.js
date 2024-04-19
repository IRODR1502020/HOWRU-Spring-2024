import React from 'react';
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import Bootstrap from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Styling/bootstrap.css"
import "./DashboardPageStyling/DashboardPageStyling.scss";
import dashIcon from "../../Assets/dashicon.png"
import musicIcon from "../../Assets/musicicon.png"
import exerciseIcon from "../../Assets/exerciseicon.jpg"
import calIcon from "../../Assets/calicon.png"


const DashboardPage = () => {
	const navigate = useNavigate();
	
	return (
		<SkeletonForAllPages>
			
			<div className="d-flex align-items-center justify-content-center">
				<div className="menu">
					<button className="menu-button" type="button" onClick={() => navigate('/check-in')}>
						<img src={dashIcon} alt="Dashboard Icon"/> 
						Daily Check-in 
					</button>
					<button className="menu-button" type="button" onClick={() => navigate('/ambientmusic')}> 
						<img src={musicIcon} alt="Music Icon"/> 
						Ambient Music 
					</button>
					<button className="menu-button" type="button" onClick={() => navigate('/restyourmind')}> 
						<img src={exerciseIcon} alt="Exercise Icon"/> 
						Meditative Techniques 
					</button>
					<button className="menu-button" type="button" onClick={() => navigate('/roadmap')}> 
						<img src={calIcon} alt="Calendar Icon"/>
						De-Stress My Life Roadmap 
					</button>
					
				</div>
			</div>
		</SkeletonForAllPages>
		
	);
	
}

export default DashboardPage;