import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LoginWidget from './GeneralComponents/LoginWidget.js';
import logo from "../Assets/logo.png"


const LoginPage = () => {
	const navigate = useNavigate();
	
	const logoStyle = {
		height: "350px",
		marginBottom: "-1rem",
		marginTop: "-2rem",
		width: "auto",
	 };
	
	return (
	
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh',
		}}>
			<img src={logo} alt="logo" style={logoStyle} />
			<Box
			  sx={{ width: '600px', mb: 4 }}
			>
				<LoginWidget />
			</Box>
		</Box>
	);
	
};

export default LoginPage;