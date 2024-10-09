import './header.css'
import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const HeaderComponent = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary container-fluid p-2 p-md-3 p-lg-4">
        

            {/* Logo */}
            <Link to="/YongeEglintonHub" className="navbar-brand">
                Yonge & Eglinton Hub
            </Link> 
            
            {/*  button to toggle navbar as a dropdown on mobile */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='headerToggler'/>

            {/*  collpsible navbar */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link>
                        <Link to="/YongeEglintonHub" className="link-underline link-underline-opacity-0 text-primary">
                                        Home
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/YongeEglintonHub/breaking" className="link-underline link-underline-opacity-0  text-danger">
                            Breaking News
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/YongeEglintonHub/sports" className="link-underline link-underline-opacity-0  text-success" >
                            Sports
                        </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to="/YongeEglintonHub/entertainment" className="link-underline link-underline-opacity-0  text-warning" >
                            Entertainment
                        </Link>
                    </Nav.Link>

                    
                </Nav>
            </Navbar.Collapse>
        
        </Navbar>
    )
    
}

export default HeaderComponent;


