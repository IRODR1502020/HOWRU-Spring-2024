import { useNavigate } from 'react-router-dom'

const Footer = () => {
	const navigate = useNavigate();
	
    return (
		
		<footer class="bg-secondary-subtle row p-3" >
			<div class="col-md-8 text-end" >HowRU by <a href="#" class="link-underline-primary">Liane Sangollo</a></div>
			<div class="col-md-2 text-end"><a href="#" class="link-underline-primary">About Us</a></div>
			<div class="col-md-2 text-end"><a href="#" class="link-underline-primary">Contact Us</a></div>
		</footer>
		
    );
}

export default Footer;