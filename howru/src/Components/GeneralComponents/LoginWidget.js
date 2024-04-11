import React, { useState, useEffect } from 'react';
import AuthServiceInstance from "./AuthService.js";
import { TextField, Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';


const LoginWidget = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [missingInfoMessage, setMissingInfoMessage] = useState("");
	const [badCredentialsMessage, setBadCredentialsMessage] = useState("");
	
	useEffect(() => {
		if (sessionStorage.getItem("login_token")) {
			navigate("/dashboard");
		}
	});

    const handleLogin = async (e) => {
		e.preventDefault();
		
		if (!email || !password) {
			setMissingInfoMessage('Please fill out all the fields!');
			return;
		}
		
		const userEmailAndPass = {}
		userEmailAndPass['email'] = email;
		userEmailAndPass['password'] = password; // TODO: hash the password, do not send in plaintext
		
		//console.log(userEmailAndPass);
		
		const userToken = await AuthServiceInstance.loginUser(userEmailAndPass);
		
		//console.log(userToken.userEmail);
		
		if(userToken.userEmail === undefined) {
			setBadCredentialsMessage('Incorrect email or password!');
			return;
		}
		else {
			userToken.token = userToken.token.replace(/["]/g, '')
			userToken.userEmail = userToken.userEmail.replace(/["]/g, '')
			userToken.userName = userToken.userName.replace(/["]/g, '')
			
			sessionStorage.setItem('login_token', userToken.token);
			sessionStorage.setItem('user_email', userToken.userEmail);
			sessionStorage.setItem('name', userToken.userName);
			navigate("/dashboard");
		}
		
    };
	
    return (
        <Container>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <TextField
						className="form-control"
						id="userEmail"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        margin="normal"
                        size="small"
                    />
                </div>
                <div className="mb-3">
                    <TextField
						className="form-control"
						id="userPassword"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        margin="normal"
                        size="small"
                    />
                </div>
				<Box sx={{ bgcolor: "white", width: '200px', borderRadius: '15px', marginLeft: '175px'}}>
					{missingInfoMessage && (
						<Typography variant="body2" color="error" align="center">
							{missingInfoMessage}
						</Typography>
						
						
					)}
					{badCredentialsMessage && (
						<Typography variant="body2" color="error" align="center">
							{badCredentialsMessage}
						</Typography>	
					)}
				</Box>
                <Box sx={{
					mt: '1rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <button className="btn btn-success" type="submit" variant="contained" style={{ marginRight: '0.5rem' }}>Login</button>
                    <button className="btn btn-primary" type="button" onClick={() => navigate('/register')} variant="contained" style={{ marginRight: '0.5rem' }}>Sign up for free now!</button>
                    <button className="btn btn-secondary" type="button" onClick={() => navigate('/forgot-password')} variant="contained">Forgot password?</button>
                </Box>
            </form>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
            }}>
                <button className="btn btn-info" onClick={() => navigate('/')} variant="contained">Return to Home</button>
            </Box>
        </Container>
    );
};

export default LoginWidget;
