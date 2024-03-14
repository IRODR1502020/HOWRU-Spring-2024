import React from 'react';
import { House, Gear, InfoCircle, QuestionCircle} from 'react-bootstrap-icons';
import logo from "../../Assets/logo.png"
// import "../../Styling/bootstrap.css"

export default function Navbar() {

	const logoStyle = {
		height: "100px",
		marginBottom: "2.5rem",
		marginTop: "2rem",
		marginLeft: "0.75rem",
		width: "auto",
	 };
	
    return (
        <div class="bg-primary-subtle min-vh-100 nav d-flex flex-column">
                    <li className="nav-item">
                        <img src={logo} style={logoStyle} />
                    </li>
                    <li className="nav-item">
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
