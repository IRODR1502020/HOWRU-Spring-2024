import React from "react";
import "../../Styling/bootstrap.css"
import { Button, Typography, Link } from "@mui/material";
import Bootstrap from 'react-bootstrap';
//import Carousel from "../GeneralComponents/Carousel.js";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const AccountNavbar = () => {
	const buttonPurpleBackground = {
		"background-image" : "linear-gradient(135deg, rgb(83, 64, 203) 0%, rgb(137, 70, 163) 100%)",
		color: "#FFF",
		padding: "20px",
		"border-radius": "24px",
		"box-shadow": "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}

	const createAccountButton = {
		"border-radius": "24px",
		"box-shadow": "5px 5px 5px 0px rgba(0,0,0,0.75)"
	}

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row" className="p-4">
                    <Typography variant="body2" align="right">
                        <Link component={RouterLink} to="/login" underline="hover" className="p-2 m-2" style={ buttonPurpleBackground }>
                            Sign in
                        </Link>
                        <Link component={RouterLink} to="/register" underline="hover" className="p-2 m-2" style={createAccountButton}>
                            Create account
                        </Link>
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default AccountNavbar;