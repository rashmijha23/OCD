import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';




function ColorSchemesExample() {
  return (
    <>
    <div className="marq">
        <marquee behavior="" direction="right">An online OCD Treatment Platform:The importance of Proper care</marquee>
    </div>
      <Navbar  data-bs-theme="dark" className='mynav sticky-top'>
        <Container className='mycont'>
          <Navbar.Brand className='logo' href="#home"><b><span>Mind</span>Ease</b></Navbar.Brand>
         
          <Nav className="ms-auto">
            <Nav.Link  href="/Signup" className='sign' id='signup' >Signup</Nav.Link> 
            <Nav.Link href="#login" className='sign' id='log'> Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      

     
    
    </>
  );
}

export default ColorSchemesExample;