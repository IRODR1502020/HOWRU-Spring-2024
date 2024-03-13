import React, { useState } from "react";
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Config/firebase.js';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import bg from "../Assets/waves_bg.jpg";

const ResetPassword = () => {
	const [email, setEmail] = useState('');
	const [isEmailSent, setIsEmailSent] = useState(false);
	const navigate = useNavigate();
	
	const handleResetPassword = async () => {
		try {
			await sendPasswordResetEmail(auth, email);
			setIsEmailSent(true);
		} catch (error) {
			console.error("Error sending reset email! Error code: ", error);
		}
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
				  <Typography variant="body1" align="center" mb={2}>
					Password reset email sent. Please check your inbox for instructions!
				  </Typography>
				) : null}
				<TextField
				  label="Email"
				  type="email"
				  value={email}
				  onChange={(e) => setEmail(e.target.value)}
				  placeholder="Enter your email"
				  fullWidth
				  margin="normal"
				  size="small"
				/>
				<Button variant="contained" onClick={handleResetPassword} fullWidth>
				  Reset Password
				</Button>
				<Button variant="contained" onClick={() => navigate('/login')} fullWidth style={{ marginTop: '1rem' }}>
				  Return to Login
				</Button>
			  </Box>
			</Box>
		</div>
	);
	
}

export default ResetPassword;