import { getAuth } from 'firebase/auth';
import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
	const navigate = useNavigate();
	
	const auth = getAuth();
	const currentUser = auth.currentUser;
	
	console.log("Current user email is: ", currentUser.email)
	
	if (currentUser.email === null) {
		navigate('/login')
	}
	
	
	return (
		<div>
			this is a protected route!
			<Outlet />
		</div>
	);
	
}

export default ProtectedRoute;