import React from "react";
import AuthServiceInstance from "./AuthService";
import "../../Styling/bootstrap.css"
import { Button, Typography, Link } from "@mui/material";
import Bootstrap from 'react-bootstrap';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { create } from "@mui/material/styles/createTransitions";

const AccountNavbar = () => {
    const navigate = useNavigate();

	const buttonPurpleBackground = {
		backgroundImage : "linear-gradient(135deg, rgb(83, 64, 203) 0%, rgb(137, 70, 163) 100%)",
		color: "#FFF",
		padding: "20px",
		borderRadius: "24px",
		boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}

	const createAccountButton = {
		borderRadius: "24px",
		boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)"
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
        <div className="row">
            <div className="col-md-12">
                <div className="row p-4">
                    <Typography variant="body2" align="right">
                        {
                            sessionStorage.getItem('name') === null ?
                                null : (<span><h4 className="d-inline-block pr-2 m-0">Hello, {sessionStorage.getItem('name')}</h4> 
                                        <Link style={ createAccountButton } type="button" onClick={handleLogout} underline="hover" className="p-2 m-2"> Logout </Link></span>)

                        }
						{
                            sessionStorage.getItem('name') !== null ?
                        (<Link component={RouterLink} to="/dashboard" underline="hover" className="p-2 m-2" style={ buttonPurpleBackground }>
                            Dashboard
                        </Link>) : 
						(<Link component={RouterLink} to="/login" underline="hover" className="p-2 m-2" style={ buttonPurpleBackground }>
                            Sign in
                        </Link>)
                        }
						
						{
                            sessionStorage.getItem('name') !== null ?
                        null : (<Link component={RouterLink} to="/register" underline="hover" className="p-2 m-2" style={createAccountButton}>
                            Create account
                        </Link>)
                        }
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default AccountNavbar;