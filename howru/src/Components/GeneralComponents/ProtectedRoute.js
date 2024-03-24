import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
	const navigate = useNavigate();
	
	return (
		<div>
			this is a protected route!
			<Outlet />
		</div>
	);
	
}

export default ProtectedRoute;