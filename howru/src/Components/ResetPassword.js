import React, { useState } from "react";
import { TextField, Box, Typography, Link } from '@mui/material';
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
					<button className="btn btn-success" variant="contained" onClick={handleResetPassword} style={{ marginTop: '0.75rem', width: '275px' }} >
					  Reset Password
					</button>
					<button className="btn btn-info" variant="contained" onClick={() => navigate('/login')} style={{ marginTop: '1rem', marginBottom: '1rem', width: '275px' }}>
					  Return to Login
					</button>
				</Box>
			</Box>
		</div>
	);
	
}

export default ResetPassword;