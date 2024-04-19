import React from "react";
import AuthServiceInstance from "./AuthService";
import "../../Styling/bootstrap.css"
import { Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png"

const AccountNavbar = () => {
    const navigate = useNavigate();

	const logoStyle = {
		height: "50px",
		width: "auto",
	}

	const buttonDarkBlueBackground = {
		backgroundColor : "#274C77",
		color: "#FFF",
		padding: "0px",
		borderRadius: "24px",
		boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}

	const createAccountButton = {
		borderRadius: "24px",
		boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)",
		cursor: "pointer",
	}

    const navbarColor = {
        backgroundColor: "#1A1B25"
    }

	const handleLogout = () => {
		const userEmail = {
			'email': sessionStorage.getItem("user_email")
		}
		
		AuthServiceInstance.logoutUser(userEmail);
		//console.log(response)
		
		sessionStorage.clear();
		navigate("/login");
		
	}

    return (

		<nav className="navbar navbar-expand-lg p-3 fixed-top" style={navbarColor}>
				<div className="navbar-brand">
					<img src={logo} alt="logo" style={logoStyle} />
				</div>
				
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
						
							<Link component={RouterLink} to="/" underline="hover" className="p-2 m-2"> Home </Link>
						
						</li>

						<li className="nav-item">
							{
								sessionStorage.getItem('name') !== null ?
							(<Link component={RouterLink} to="/dashboard" underline="hover" style={ createAccountButton } className="p-2 m-2 text-white">
								Dashboard
							</Link>) : 
							(<Link component={RouterLink} to="/login" underline="hover" className="p-2 m-2">
								Sign in
							</Link>)
							}
						</li>

						<li className="nav-item">
							{
								sessionStorage.getItem('name') !== null ?
							null : (<Link component={RouterLink} to="/register" underline="hover" className="p-2 m-2" style={buttonDarkBlueBackground}>
								Create account
							</Link>)
							}
						</li>

						<li className="nav-item">
							{
							sessionStorage.getItem('name') === null ?
								null : ( 
							<Link style={ createAccountButton } onClick={handleLogout} underline="hover" className="p-2 m-2 text-white"> Logout </Link>)

							}
						</li>
						
						<li className="nav-item">
							{
							sessionStorage.getItem('name') === null ?
								null : (<h5 className="d-inline-block pr-2 m-0 text-white">Hello, {sessionStorage.getItem('name')}</h5>)

							}
						</li>
						
					</ul>
				</div>
		</nav>
    );
};

export default AccountNavbar;