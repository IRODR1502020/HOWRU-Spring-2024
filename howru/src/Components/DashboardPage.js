import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';


const DashboardPage = () => {
	const navigate = useNavigate();
	
	return (
		<div> 
			hello world
			
			<button variant="contained" onClick={() => navigate('my-profile')}>
				Click me to see your profile.
			</button>
			
		</div>
		
	);
	
}

export default DashboardPage;