import React, { useState } from 'react';
import { Popover } from "@mui/material"
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import "./RestYourMindPageStyling/RestYourMindPage.scss";
import bg from "../../Assets/lake2.png";

const RestYourMindPage = () => {
	const [destressPopover, setDestressPopover] = useState(null);
	const [sleepPopover, setSleepPopover] = useState(false);
	const [focusPopover, setFocusPopover] = useState(false);

	const handleDestressClick = (event) => {
		setDestressPopover(event.currentTarget);
	};
	
	const handleSleepClick = (event) => {
		setSleepPopover(event.currentTarget);
	};
	
	const handleFocusClick = (event) => {
		setFocusPopover(event.currentTarget);
	};
  
	const handleClose = () => {
		setDestressPopover(null);
		setSleepPopover(null);
		setFocusPopover(null);
	}
	
	const openDestress = Boolean(destressPopover);
	const openSleep = Boolean(sleepPopover);
	const openFocus = Boolean(focusPopover);
	
	return (
	<SkeletonForAllPages>
		<div style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: 'cover',
				}}>
		<div className="container-wrapper">
			<div className="exercisecontainer"> 
				<h1> 
					Meditation Techniques
				</h1>
				<h3>
					I want to...
				</h3>
				<button aria-describedby="destress" type="button" className="exercisecontainer exbutton" onClick={handleDestressClick}> 
					Destress my day! 
				</button>
				
				<Popover
				id="destress"
				anchorReference="anchorPosition"
				anchorPosition={{ top: 200, left: 800 }}
				open={openDestress}
				onClose={handleClose}
				anchorOrigin={{
				  vertical: 'center',
				  horizontal: 'right',
				}}> 
					<div className="popover-wrapper">
						<h3 className="popover-div1"> Start by controlling your breathing. </h3>
						<div className="popover-div2"> Inhale deeply through your nose for 4 seconds. </div>
						
						<div className="popover-div3"> Hold your breath for 4 seconds. </div>
						
						<div className="popover-div4"> Exhale slowly and steadily through your mouth for 4 seconds. </div>
						
						<div className="popover-div5"> Hold for 4 seconds before beginning the next cycle. </div>
						
						<div className="popover-div6"> Repeat for as many cycles as desired. </div>
					</div>
				</Popover>
				
				<button aria-describedby="sleep" type="button" className="exercisecontainer exbutton" onClick={handleSleepClick}> 
					Rest my mind! 
				</button>
				
				<Popover
				id="sleep"
				anchorReference="anchorPosition"
				anchorPosition={{ top: 200, left: 800 }}
				open={openSleep}
				onClose={handleClose}
				anchorOrigin={{
				  vertical: 'center',
				  horizontal: 'right',
				}}> 
					<div className="popover-wrapper">
						<h3 className="popover-div1"> Give your mind and body a rest. </h3>
						<div className="popover-div2"> Inhale slowly through your nose for 4 seconds. </div>
						
						<div className="popover-div3"> Hold your breath for 7 seconds. </div>
						
						<div className="popover-div4"> Exhale gently and completely through your mouth for 8 seconds. </div>
						
						<div className="popover-div5"> Repeat these steps for as many cycles as needed. </div>
						
						<div className="popover-div6"> Lay still, relax your mind and allow yourself a well-deserved rest.</div>
						
					</div>
				</Popover>
				
				<button aria-describedby="focus" type="button" className="exercisecontainer exbutton" onClick={handleFocusClick}> 
					Strengthen my focus!
				</button>
				
				<Popover
				id="focus"
				anchorReference="anchorPosition"
				anchorPosition={{ top: 200, left: 600 }}
				open={openFocus}
				onClose={handleClose}
				anchorOrigin={{
				  vertical: 'center',
				  horizontal: 'right',
				}}> 
					<div className="popover-wrapper">
						<h3 className="popover-div1"> Sharpen your senses and well-being. </h3>
						<div className="popover-div2"> Close one nostril using your fingers and inhale deeply through the other nostril, counting to 4 seconds. </div>
						
						<div className="popover-div3"> Now, close both nostrils using your fingers and hold your breath for 4 seconds. </div>
						
						<div className="popover-div4"> Release the previously closed nostril and exhale slowly and completely through that nostril for 4 seconds. </div>
						
						<div className="popover-div5"> Repeat these steps for as many cycles as needed. </div>
						
						<div className="popover-div6"> Release yourself from distractions and unlock your inner powers. </div>
						
					</div>
				</Popover>

			</div>
		</div>
		</div>
	</SkeletonForAllPages>
	);
	
}

export default RestYourMindPage;