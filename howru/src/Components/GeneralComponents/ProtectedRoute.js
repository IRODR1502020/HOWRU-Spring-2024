import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
	
	if (!sessionStorage.getItem("login_token")) return <Navigate to="/login" />;
	else {
		return (
			<Outlet />
		);
	}
	
}

export default ProtectedRoute;