import React from 'react';
import './bootstrap.css';

export default function AboutUs(props) {

    return (
        <div>
            <h3>About Us</h3>
            <p>{props.about_us_text}</p>
        </div>
    )
}