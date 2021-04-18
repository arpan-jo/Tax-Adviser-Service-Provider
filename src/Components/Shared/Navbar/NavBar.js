import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <section>
         <div className="">
            <Navbar bg="secondary" expand="lg">
               <Navbar.Brand as={Link} to="/home">
                  <h3 style={{ 'font-family': 'Dancing Script' }}>
                     <span className="fs-1 px-3">TAX</span>
                     <span className="text-warning fw-bold">ADVISER</span>
                  </h3>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto fw-bold px-4">
                     <Nav.Link as={Link} to="/home">
                        <span className="text-white"> Home</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/common">
                        <span className="text-white"> Dashboard</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/addReview">
                        <span className="text-white"> Reviews</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/login">
                        <span className="text-white"> Login</span>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </div>
      </section>
   );
};

export default NavBar;
