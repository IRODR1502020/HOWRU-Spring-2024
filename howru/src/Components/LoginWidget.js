import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/bootstrap.css';

export default function LoginWidget () {
	const navigate = useNavigate();
	
    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="btn btn-success">Login</button>
            <button type="submit" class="btn btn-primary">Sign Up</button>
            <button type="button" onClick={() => navigate('/forgot-password')} class="btn btn-secondary">Forgot Password</button>
        </form>
    )
}