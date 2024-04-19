import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();
	
	return (
		 <section >
			<div className="container flex flex-col items-center justify-center">
			<div>
			<h2>
				<span>Error</span>404
			</h2>
			<p >Sorry, we couldn't find this page.</p>
			<p>But dont worry, you can find plenty of other things on our homepage.</p>
			<button type="button" onClick={() => navigate("/")}>Back to homepage</button>
			</div>
			</div>
		</section>
	)
}

export default ErrorPage;