import React from 'react';
import { Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../Styling/bootstrap.css';

const LoginWidget = () => {
	const navigate = useNavigate();
	
    return (
		<Container>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" placeholder="example@gmail.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1"/>
				</div>
				<Box sx={{ 
					display: 'flex',
					justifyContent: 'center',
					}}
				>
					<button type="submit" class="btn btn-success" style={{ marginRight: '0.5rem' }}> Login </button>
					<button type="submit" onClick={() => navigate('/register')}class="btn btn-primary" style={{ marginRight: '0.5rem' }}>Sign up for free now!</button>
					<button type="button" onClick={() => navigate('/forgot-password')} class="btn btn-secondary">Forgot password? </button>
				</Box>
			</form>
			<Box sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Button variant="contained" onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
					Return to Home
				</Button>
			</Box>
		</Container>
		
    );
}

export default LoginWidget;