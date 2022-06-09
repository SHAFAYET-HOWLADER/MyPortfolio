import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink';
import {AiFillProject} from 'react-icons/ai';
import {BsQuestionSquareFill} from 'react-icons/bs';
import {GiSkills} from 'react-icons/gi';
import {MdPermContactCalendar} from 'react-icons/md';
import './Navigation.css'
const Navigation = () => {

    return (
        <Navbar  collapseOnSelect expand="lg" style={{
            background: '#c3195d',
        }}>
            <Container>
                <CustomLink to="/home" className='logo'>
                    <h3>Safayet</h3>
                </CustomLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav_right">
                        <CustomLink className='index' to="/Projects"> <AiFillProject className='nav_icon'/>&nbsp;My Projects</CustomLink>
                        <CustomLink className='index' to="/Faq"><BsQuestionSquareFill className='nav_icon'/>&nbsp;Faq</CustomLink>
                        <CustomLink className='index' to="/skills"><GiSkills className='nav_icon'/>&nbsp;My Skills</CustomLink>
                        <CustomLink className='index' to="/contact"><MdPermContactCalendar className='nav_icon'/>&nbsp;Contact</CustomLink>                      
                    </Nav>                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;