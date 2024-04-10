import React, { useState } from 'react';
import { Popover } from "@mui/material"
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import "./RestYourMindPageStyling/RestYourMindPage.scss";

const RestYourMindPage = () => {
	const [destressPopover, setDestressPopover] = useState(null);
	const [sleepPopover, setSleepPopover] = useState(false);
	const [focusPopover, setFocusPopover] = useState(false);
	
	const handleDestressClick = (event) => {
		setDestressPopover(event.currentTarget);
	};
  
	const handleClose = () => {
		setDestressPopover(null);
		setSleepPopover(null);
		setFocusPopover(null);
	}
	
	const openDestress = Boolean(destressPopover);
	
	return (
	<SkeletonForAllPages>
		<div className="container-wrapper">
			<div className="exercisecontainer"> 
				<h1> 
					Meditation Techniques
				</h1>
				<h3>
					I want to...
				</h3>
				<button aria-describedby="button1" type="button" className="exercisecontainer exbutton" onClick={handleDestressClick}> 
					Destress my day! 
				</button>
				{destressPopover && (
						<Popover
						id="button1"
						anchorEl={destressPopover}
						open={openDestress}
						onClose={handleClose}
						anchorOrigin={{
						  vertical: 'bottom',
						  horizontal: 'left',
						}}> 
							I'm a popover! 
						</Popover>
				)}
				<button type="button" className="exercisecontainer exbutton"> 
					Ease my sleep! 
				</button>
				<button type="button" className="exercisecontainer exbutton"> 
					Strengthen my focus!
				</button>

			</div>
		</div>
	</SkeletonForAllPages>
	);
	
}

export default RestYourMindPage;