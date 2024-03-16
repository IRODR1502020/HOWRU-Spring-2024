import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { TextField, Box } from '@mui/material';
import bg from "../Assets/waves_bg.jpg";
import '../Styling/bootstrap.css';

const RegisterPage = () => {
	const [name, setName] = useState();
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	const navigate = useNavigate();

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
	
	const sectionStyle = {
		height: '100vh',
		backgroundColor: '#2779e2'
	  };

	const cardStyle = {
		'border-radius': '15px'
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
				<button className="btn btn-success" variant="contained" onClick={handleRegister} style={{ marginTop: '0.5rem', width: '275px' }}>
					Create Account
				</button>
				<button className="btn btn-secondary" variant="contained" onClick={() => navigate('/login')} style={{ marginTop: '1rem', marginBottom: '1rem', width: '275px' }} >
					Return to Login
				</button>
			  </Box>
			</Box>
		</div>
	);

};

export default RegisterPage;