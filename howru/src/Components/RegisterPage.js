import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import '../Styling/bootstrap.css';

const RegisterPage = () => {
	const [name, setName] = useState();
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	
	const navigate = useNavigate();

	const sectionStyle = {
		height: '100vh',
		backgroundColor: '#2779e2'
	  };

	const cardStyle = {
		'border-radius': '15px'
	};

	const auth = getAuth();
	const handleRegister = async () => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			console.log("User Registered: ", userCredential.user);
			const userData = {
				email: userCredential.user.email // Accessing email directly from userCredential.user
			};
			navigate("/");
		} catch(error) {
			console.log(error);
		}
	}
	

	return (
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
			<TextField
			  label="Name"
			  type="name"
			  value={name}
			  onChange={(e) => setName(e.target.value)}
			  placeholder="Enter your Name"
			  fullWidth
			  margin="normal"
			  size="small"
			/>

			<TextField
			  label="Password"
			  type="password"
			  value={password}
			  onChange={(e) => setPassword(e.target.value)}
			  placeholder="Enter your password"
			  fullWidth
			  margin="normal"
			  size="small"
			/>

			<Button variant="contained" onClick={handleRegister} fullWidth>
		  		Create Account
			</Button>
		  </Box>
		</Box>
	);

};

export default RegisterPage;