import './header.css'
import React from 'react';
import {Link} from 'react-router-dom';

const HeaderComponent = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">


                    <Link to="/YongeEglintonHub" className="navbar-brand">
                        Yonge & Eglinton Hub
                    </Link>
                    

                    <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation' >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id='navbarNav'>
                        <ul className="navbar-nav">
                            <li className="nav-i">

                                <Link to="/YongeEglintonHub" className="nav-link text-primary">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-i">
                                <Link to="/YongeEglintonHub/breaking" className="nav-link text-danger">
                                    Breaking News
                                </Link>
                            </li>
                            <li className="nav-i">
                                <Link to="/YongeEglintonHub/sports" className="nav-link text-success" >
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-i">
                                <Link to="/YongeEglintonHub/entertainment" className="nav-link text-warning" >
                                    Entertainment
                                </Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
    
}

export default HeaderComponent;