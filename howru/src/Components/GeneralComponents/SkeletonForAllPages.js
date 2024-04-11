import React from "react";
import Bootstrap from 'react-bootstrap';
import Navbar from "../GeneralComponents/Navbar";
import Footer from "../GeneralComponents/Footer"
import AccountNavbar from "./AccountNavbar";


const SkeletonForAllPages = ({children}) => {
    return (
        <div className="container-fluid">
            <AccountNavbar />
            <div className="row p-0">
                <div className="col-md-1 fixed-top p-0 h-100">
                    <Navbar />
                </div>
            </div>

            <div className="row p-0">
                <div className="col-md-1 p-0"></div>
                <div className="col-md-11 p-0 m-0">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SkeletonForAllPages;