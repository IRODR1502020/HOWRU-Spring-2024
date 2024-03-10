import { useNavigate } from "react-router-dom";
import LoginWidget from './GeneralComponents/LoginWidget.js';


const LoginPage = () => {
	const navigate = useNavigate();
	
	return (
		<LoginWidget />
	);
	
};

export default LoginPage;