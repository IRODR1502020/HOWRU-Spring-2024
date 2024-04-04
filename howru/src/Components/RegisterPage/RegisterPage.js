import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Typography } from '@mui/material';
import bg from "../../Assets/waves_bg.jpg";
import '../../Styling/bootstrap.css';
import SkeletonForAllPages from '../GeneralComponents/SkeletonForAllPages';
import AuthServiceInstance from "../GeneralComponents/AuthService.js";


const RegisterPage = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [missingInfoMessage, setMissingInfoMessage] = useState("");
	const navigate = useNavigate();
	
	useEffect(() => {
		if (sessionStorage.getItem("login_token")) {
			navigate("/dashboard");
		}
	});
	
	const handleRegister = async (e) => {
		e.preventDefault();
		
		if (!email || !password || !name) {
			setMissingInfoMessage('Please fill out all the fields!');
			return;
		}
		
		const userData = {}
		userData['email'] = email;
		userData['password'] = password; // TODO: hash the password, do not send in plaintext
		userData['name'] = name;
		
		//console.log(userData);
		
		const userToken = await AuthServiceInstance.registerUser(userData);
		
		// TODO: handle error if user account already exists
		if(userToken.userEmail === undefined) {
			return;
		}
		else { 
			// Replace the quotation marks in the returned token via regex
			userToken.name = userToken.name.replace(/["]/g, '');
			userToken.token = userToken.token.replace(/["]/g, '');
			userToken.userEmail = userToken.userEmail.replace(/["]/g, '');
			
			sessionStorage.setItem('login_token', userToken.token);
			sessionStorage.setItem('user_name', userToken.name);
			sessionStorage.setItem('user_email', userToken.userEmail);
			navigate("/dashboard");
		}
		
	}
	
	const sectionStyle = {
		height: '100vh',
		backgroundColor: '#2779e2'
	  };

	const cardStyle = {
		'border-radius': '15px'
	};
	

	return (
		<SkeletonForAllPages>
		<div style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: 'cover',
			}}
		>
		<form onSubmit={handleRegister}>
			<Box
			  sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			  }}
			>
				<Box sx={{ 
					width: '350px', 
					mb: 4, 
					bgcolor: 'white',
					display: 'inherit',
					flexDirection: 'inherit',
					alignItems: 'inherit',
					borderRadius: '15px',
					}}
				>
				
				<h3 style={{ marginTop: '0.5rem' }}> Breathe a sigh of relief! </h3>
				<TextField
				  label="Email"
				  type="email"
				  value={email}
				  onChange={(e) => setEmail(e.target.value)}
				  placeholder="Enter your email"
				  margin="normal"
				  size="small"
				/>
				<TextField
				  label="Name"
				  type="name"
				  value={name}
				  onChange={(e) => setName(e.target.value)}
				  placeholder="Enter your name"
				  margin="normal"
				  size="small"
				/>

				<TextField
				  label="Password"
				  type="password"
				  value={password}
				  onChange={(e) => setPassword(e.target.value)}
				  placeholder="Create your password"
				  margin="normal"
				  size="small"
				/>
				<div id="emailHelp" className="form-text">We'll never share your personal data.</div>
				<Box sx={{ margin: '0.5rem' }}>
					{missingInfoMessage && (
						<Typography variant="body2" color="error" align="center">
							{missingInfoMessage}
						</Typography>
					)}
					</Box>
				<button className="btn btn-success" type="submit" variant="contained" style={{ marginTop: '0.5rem', width: '275px' }}>
					Create Account
				</button>
				<button className="btn btn-secondary" type="button" variant="contained" onClick={() => navigate('/login')} style={{ marginTop: '1rem', marginBottom: '1rem', width: '275px' }} >
					Return to Login
				</button>
			  </Box>
			</Box>
		</form>
		</div>
		</SkeletonForAllPages>
	);

};

export default RegisterPage;