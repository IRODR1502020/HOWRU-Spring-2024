import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage.js'
import SplashPage from './Components/SplashPage/SplashPage.js'
import RegisterPage from './Components/RegisterPage.js'
import ResetPasswordPage from './Components/ResetPassword.js';
import DashboardPage from './Components/DashboardPage.js';

const App = () => {
    return (
        <Router>
			<Routes>
				<Route path="/" element={<SplashPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/forgot-password" element={<ResetPasswordPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				
			</Routes>
        </Router>
        
    );
};

export default App;