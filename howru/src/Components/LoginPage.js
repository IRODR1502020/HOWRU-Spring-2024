import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import LoginWidget from './GeneralComponents/LoginWidget.js';


const LoginPage = () => {
	const navigate = useNavigate();
	
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh',
		}}>
			<Box
			  sx={{ width: '600px', mb: 4 }}
			>
				<LoginWidget />
			</Box>
		</Box>
	);
	
};

export default LoginPage;