import React from 'react';
import * as Icon from 'react-bootstrap-icons';
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
        <div class="bg-primary-subtle min-vh-100">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <img src={logo} style={logoStyle} />
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <Icon.House height="32" width="32"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <Icon.Gear height="32" width="32"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <Icon.InfoCircle height="32" width="32"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <Icon.QuestionCircle height="32" width="32"/>
                        </a>
                    </li>
                </ul>
        </div>
    );
}
