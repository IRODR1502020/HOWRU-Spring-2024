import React from "react";
import AuthServiceInstance from "./AuthService";
import "../../Styling/bootstrap.css"
import { Button, Typography, Link } from "@mui/material";
import { House } from 'react-bootstrap-icons';
import Bootstrap from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { create } from "@mui/material/styles/createTransitions";
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
		boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)"
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


            <nav class="navbar navbar-expand-lg p-3 fixed-top" style={navbarColor}>
                    <a class="navbar-brand" href="#">
				        <img src={logo} alt="logo" style={logoStyle} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" style={{ backgroundColor: "red" }}>
                                <a href="#" className="nav-item text-white" onClick={() => navigate('/')} align="right">
                                    <House height="32" width="32" style={{ color: "white" }} />
                                </a>
                            </li>
                            <li class="nav-item">
                                {
                                    sessionStorage.getItem('name') !== null ?
                                (<Link component={RouterLink} to="/dashboard" underline="hover" className="p-2 m-2 text-white">
                                    Dashboard
                                </Link>) : 
                                (<Link component={RouterLink} to="/login" underline="hover" className="p-2 m-2">
                                    Sign in
                                </Link>)
                                }
                            </li>

                            <li class="nav-item">
                                {
                                    sessionStorage.getItem('name') !== null ?
                                null : (<Link component={RouterLink} to="/register" underline="hover" className="p-2 m-2" style={createAccountButton, buttonDarkBlueBackground}>
                                    Create account
                                </Link>)
                                }
                            </li>

                            <li class="nav-item">
                                {
                                sessionStorage.getItem('name') === null ?
                                    null : (<span><h4 className="d-inline-block pr-2 m-0 text-white">Hello, {sessionStorage.getItem('name')}</h4> 
                                            <Link style={ createAccountButton } type="button" onClick={handleLogout} underline="hover" className="p-2 m-2 text-white"> Logout </Link></span>)

                                }
                            </li>
                        </ul>
                    </div>
            </nav>
    );
};

export default AccountNavbar;