import React, { useState } from 'react';
import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar expand="md">
        <NavbarBrand href="/"><img src="/assets/headerLogo.png" alt="logo"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink id="aboutLink" className="link" href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="aboutLink" className="link" href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="aboutLink" className="link" href="/joblistings">Job Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" href="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
    </div>
  );
};

export default Header;