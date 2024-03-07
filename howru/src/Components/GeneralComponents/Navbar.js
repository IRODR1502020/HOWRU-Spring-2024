import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Navbar() {
    return (
        <div>
                <ul className="nav flex-column">
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
