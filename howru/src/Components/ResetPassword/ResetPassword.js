import React, { useState } from "react";
import AuthServiceInstance from "../GeneralComponents/AuthService.js";
import { TextField, Box, Typography, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from "../../Assets/logo.png";
import bg from "../../Assets/waves_bg.jpg";


const ResetPassword = () => {
	const [email, setEmail] = useState('');
	const [isEmailSent, setIsEmailSent] = useState(false);
	const [missingInfoMessage, setMissingInfoMessage] = useState("");
	const navigate = useNavigate();
	
	// TODO: set timeout or something to prevent the function from hanging/crashing after a long time
	
	const handleReset = async (e) => {
		e.preventDefault();
		
		if (!email) {
			setMissingInfoMessage('Please enter a valid email to reset your password.');
			return;
		}
		
		const userEmail = {}
		userEmail['email'] = email;
		
		//console.log(userEmail);
		
		await AuthServiceInstance.resetUserPassword(userEmail)
		.then(setIsEmailSent(true));
		
	};
	
	const logoContainerStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "3rem",
	};

	const logoStyle = {
		height: "350px",
		marginBottom: "-2.5rem",
		marginTop: "-2rem",
		width: "auto",
	 };
	
	return (
		<div style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: 'cover',
				}}
		>
		<form onSubmit={handleReset}>
			<Box
			  sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			  }}
			>
				<Box sx={{ width: '300px', mb: 4 }}>
					<div style={logoContainerStyle}>
						<Link component={RouterLink} to="/login" underline="none">
							<img src={logo} alt="logo" style={logoStyle} />
						</Link>
					</div>
					{isEmailSent ? (
					  <Typography borderRadius='10px' bgcolor="white" color="error" variant="body2" align="center">
						Password reset email sent. Please check your inbox for instructions!
					  </Typography>
					) : null}
				</Box>
				<Box sx={{
					width: '375px',
					bgcolor: 'white',
					display: 'inherit',
					flexDirection: 'inherit',
					alignItems: 'inherit',
					borderRadius: '15px',
				}}>
					<TextField
					  label="Email"
					  type="email"
					  value={email}
					  onChange={(e) => setEmail(e.target.value)}
					  placeholder="Enter your email"
					  margin="normal"
					  size="small"
					/>
					<div className="form-text"> If your account exists, you'll receive a reset link via email. </div>
					<Box sx={{ margin: '0.5rem' }}>
					{missingInfoMessage && (
						<Typography variant="body2" color="error" align="center">
							{missingInfoMessage}
						</Typography>
					)}
					</Box>
					<button className="btn btn-success" type="submit" variant="contained" style={{ marginTop: '0.75rem', width: '275px' }} >
					  Reset Password
					</button>
					<button className="btn btn-info" type="button" variant="contained" onClick={() => navigate('/login')} style={{ marginTop: '1rem', marginBottom: '1rem', width: '275px' }}>
					  Return to Login
					</button>
				</Box>
			</Box>
		</form>
		</div>
	);
	
}

export default ResetPassword;