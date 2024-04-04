import React from 'react';
import { House, Gear, InfoCircle, QuestionCircle} from 'react-bootstrap-icons';
import logo from "../../Assets/logo.png"
// import "../../Styling/bootstrap.css"
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
	const navigate = useNavigate();
	
	const logoStyle = {
		height: "100px",
		marginBottom: "2.5rem",
		marginTop: "2rem",
		marginLeft: "0.75rem",
		width: "auto",
	}
	
    return (
        <div className="nav d-flex flex-column bg-secondary-subtle m-2 rounded p-4">
			<li className="nav-item">
				<img src={logo} alt="logo" style={logoStyle} />
			</li>
			<li className="nav-item">
				{
					
				}
			</li>
			<li className="nav-item" onClick={() => navigate('/')}>
				<a href="#">
					<House height="32" width="32"/>
				</a>
			</li>
			<li className="nav-item">
				<a href="#">
					<Gear height="32" width="32"/>
				</a>
			</li>
			<li className="nav-item">
				<a href="#">
					<InfoCircle height="32" width="32"/>
				</a>
			</li>
			<li className="nav-item">
				<a href="#">
					<QuestionCircle height="32" width="32"/>
				</a>
			</li>
        </div>
    );
}
