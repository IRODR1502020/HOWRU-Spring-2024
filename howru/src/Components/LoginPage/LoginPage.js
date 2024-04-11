import React from "react";
import LoginWidget from '../GeneralComponents/LoginWidget.js';
import SkeletonForAllPages from '../GeneralComponents/SkeletonForAllPages.js';
import { Box } from '@mui/material';
import logo from "../../Assets/logo.png"
import bg from "../../Assets/waves_bg.jpg";


const LoginPage = () => {
	
	const logoStyle = {
		height: "350px",
		marginBottom: "0.5rem",
		marginTop: "-2rem",
		width: "auto",
	 };
	
	return (
		<SkeletonForAllPages>
			<div style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: 'cover',
				}}
			>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}>
					<img src={logo} alt="logo" style={logoStyle} />
					<Box
					sx={{ width: '600px', mb: 4 }}
					>
						<LoginWidget />
					</Box>
				</Box>
			</div>
		</SkeletonForAllPages>
	);
	
};

export default LoginPage;