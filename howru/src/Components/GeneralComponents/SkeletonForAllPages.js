import React from "react";
import Bootstrap from 'react-bootstrap';
import Navbar from "../GeneralComponents/Navbar";
import Footer from "../GeneralComponents/Footer"

const SkeletonForAllPages = ({children}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 fixed-top vh-100">
                    <Navbar />
                </div>
            </div>

            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10 m-0">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default SkeletonForAllPages;