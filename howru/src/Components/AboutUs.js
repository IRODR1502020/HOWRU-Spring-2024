import React from 'react';
import '../Styling/bootstrap.css';

export default function AboutUs(props) {

    return (
        <div>
            <h3>About Us</h3>
            <p>{props.about_us_text}</p>
        </div>
    )
}