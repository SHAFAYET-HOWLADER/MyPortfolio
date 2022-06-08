import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink';
import './Navigation.css'
const Navigation = () => {

    return (
        <Navbar  collapseOnSelect expand="lg" style={{
            background: '#f70776',
        }}>
            <Container>
                <CustomLink to="/home" className='logo'>
                    <h3>Safayet</h3>
                </CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav_right">
                        <CustomLink className='index' to="/Projects">My Projects</CustomLink>
                        <CustomLink className='index' to="/Faq">Faq</CustomLink>
                        <CustomLink className='index' to="/skills">My Skills</CustomLink>
                        <CustomLink className='index' to="/contact">Contact</CustomLink>                      
                    </Nav>                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;