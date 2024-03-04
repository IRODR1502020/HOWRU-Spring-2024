import React from 'react';
import './bootstrap.css';

export default function Navbar() {
    return (
        <div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Help</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Logout</a>
                    </li>
                </ul>
        </div>
    );
}
