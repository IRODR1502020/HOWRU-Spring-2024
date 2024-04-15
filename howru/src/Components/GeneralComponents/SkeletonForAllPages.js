import React from "react";
import Bootstrap from 'react-bootstrap';
import Footer from "../GeneralComponents/Footer"
import AccountNavbar from "./AccountNavbar";

const noOverlap = {
    marginTop: "90px"
}
const SkeletonForAllPages = ({children}) => {
    return (
        <div className="container-fluid p-0" style={noOverlap}>
            <AccountNavbar />

            <div className="row p-0">
                <div className="col-md-12 p-0 m-0">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SkeletonForAllPages;