import React from 'react';
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import "./RestYourMindPageStyling/RestYourMindPage.scss";

const RestYourMindPage = () => {
	
	return (
	<SkeletonForAllPages>
		<div className="exercisecontainer"> 
			<h1> 
				Meditation Techniques
			</h1>
			<h3>
				I want to...
			</h3>
			<button type="button" className="exercisecontainer exbutton"> 
				Destress my day! 
			</button>
			<button type="button" className="exercisecontainer exbutton"> 
				Ease my sleep! 
			</button>
			<button type="button" className="exercisecontainer exbutton"> 
				Strengthen my focus!
			</button>
			
		
		</div>
	</SkeletonForAllPages>
	);
	
}

export default RestYourMindPage;