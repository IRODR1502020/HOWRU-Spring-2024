import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LoginWidget from './GeneralComponents/LoginWidget.js';
import logo from "../Assets/logo.png"
import bg from "../Assets/waves_bg.jpg";


const LoginPage = () => {
	const navigate = useNavigate();
	
	const logoStyle = {
		height: "350px",
		marginBottom: "-1rem",
		marginTop: "-2rem",
		width: "auto",
	 };
	
	return (
		<div style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: 'cover',
			}}
		>
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
		</div>
	);
	
};

export default LoginPage;