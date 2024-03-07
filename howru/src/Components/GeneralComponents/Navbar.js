import React from 'react';
import * as Icon from 'react-bootstrap-icons';
// import "../../Styling/bootstrap.css"

export default function Navbar() {
    return (
        <div class="bg-primary-subtle min-vh-100">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <img src="../../public/yoga.svg" />
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <Icon.House height="32" width="32"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <Icon.Gear height="32" width="32"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <Icon.InfoCircle height="32" width="32"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#">
                            <Icon.QuestionCircle height="32" width="32"/>
                        </a>
                    </li>
                </ul>
        </div>
    );
}
