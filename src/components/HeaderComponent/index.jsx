import './header.css'
import React from 'react';
import {Link} from 'react-router-dom';

const HeaderComponent = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">


                    <a to="/YongeEglintonHub" className="navbar-brand">
                        Yonge & Eglinton Hub
                    </a>
                    

                    <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation' >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id='navbarNav'>
                        <ul className="navbar-nav">
                            <li className="nav-i">

                                <a to="/YongeEglintonHub" className="nav-link text-primary">
                                    Home
                                </a>
                            </li>
                            <li className="nav-i">
                                <a to="/YongeEglintonHub/breaking" className="nav-link text-danger">
                                    Breaking News
                                </a>
                            </li>
                            <li className="nav-i">
                                <a to="/YongeEglintonHub/sports" className="nav-link text-success" >
                                    Sports
                                </a>
                            </li>
                            <li className="nav-i">
                                <a to="/YongeEglintonHub/entertainment" className="nav-link text-warning" >
                                    Entertainment
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    
}

export default HeaderComponent;