import React, { useState } from 'react';
import { TextField, Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';

const LoginWidget = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	const [missingInfoMessage, setMissingInfoMessage] = useState("");

    const auth = getAuth();

    const handleLogin = (e) => {
		e.preventDefault();
		
		if (!email || !password) {
			setMissingInfoMessage('Please fill out all the fields!');
			return;
		}
		
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Redirect to dashboard or another page upon successful login
                navigate('/dashboard');
				console.log(userCredential)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                // Handle error, possibly display to user
            });
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
                        placeholder="Enter your email"
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
