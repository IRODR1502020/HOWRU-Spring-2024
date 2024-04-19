//import { useNavigate } from 'react-router-dom'

const Footer = () => {
	//const navigate = useNavigate();
	const footerStyle = {
		backgroundColor: "#E7ECEF",
		justifyContent: "center",
	}
    return (
		
		<footer className="row p-3 m-0" style={footerStyle}>
			<div className="col-md-3">HowRU by Liane Sangollo</div>
			<div className="col-md-2"> About Us</div>
			<div className="col-md-2"> Contact Us</div>
		</footer>
		
    );
}

export default Footer;