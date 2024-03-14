import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginWidget = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Redirect to dashboard or another page upon successful login
                navigate('/');
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
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <TextField
						className="form-control"
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
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <TextField
						className="form-control"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        margin="normal"
                        size="small"
                    />
                </div>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button class="btn btn-success" type="submit" variant="contained" style={{ marginRight: '0.5rem' }}>Login</Button>
                    <Button class="btn btn-primary" onClick={() => navigate('/register')} variant="contained" style={{ marginRight: '0.5rem' }}>Sign up for free now!</Button>
                    <Button class="btn btn-secondary" onClick={() => navigate('/forgot-password')} variant="contained">Forgot password?</Button>
                </Box>
            </form>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
            }}>
                <Button onClick={() => navigate('/')} variant="contained">Return to Home</Button>
            </Box>
        </Container>
    );
};

export default LoginWidget;
