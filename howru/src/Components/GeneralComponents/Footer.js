import { useNavigate } from 'react-router-dom'

const Footer = () => {
	const navigate = useNavigate();
	const footerStyle = {
		backgroundColor: "#E7ECEF"
	}
    return (
		
		<footer className="row p-3" style={footerStyle}>
			<div className="col-md-8 text-end" >HowRU by <a href="#" className="link-underline-primary">Liane Sangollo</a></div>
			<div className="col-md-2 text-end"><a href="#" className="link-underline-primary">About Us</a></div>
			<div className="col-md-2 text-end"><a href="#" className="link-underline-primary">Contact Us</a></div>
		</footer>
		
    );
}

export default Footer;