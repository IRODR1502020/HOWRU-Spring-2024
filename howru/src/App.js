import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage.js';
import SplashPage from './Components/SplashPage/SplashPage.js'
import RegisterPage from './Components/RegisterPage/RegisterPage.js';
import ResetPasswordPage from './Components/ResetPassword/ResetPassword.js';
import ProtectedRoute from './Components/GeneralComponents/ProtectedRoute.js';
import DashboardPage from './Components/DashboardPage/DashboardPage.js';
import ProfilePage from './Components/ProfilePage/ProfilePage.js';
import RestYourMindPage from './Components/RestYourMindPage/RestYourMindPage.js'
import FeelingsCheckInPage from "./Components/FeelingsCheckIn/FeelingsCheckIn.js";
import AmbientMusicPlayerPage from "./Components/AmbientPlayerPage/AmbientPlayerPage.js";
import ErrorPage from "./Components/ErrorPage/ErrorPage.js"

const App = () => {

    return (
        <Router>
			<Routes>
				<Route path="/" element={<SplashPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/forgot-password" element={<ResetPasswordPage />} />
				<Route element={<ProtectedRoute />} > 
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/my-profile" element={<ProfilePage />} />
					<Route path="/restyourmind" element={<RestYourMindPage />} /> 
					<Route path="/check-in" element={<FeelingsCheckInPage />}/>
					<Route path="/ambientmusic" element={<AmbientMusicPlayerPage />}/>
				</Route> 
				<Route path="/*" element={<ErrorPage />} />
				
			</Routes>
        </Router>
        
    );
};

export default App;