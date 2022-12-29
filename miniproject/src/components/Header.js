import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
        <Navbar expand="lg" style={{backgroundColor:"lightskyblue"}}>
            <Container>
                <Navbar.Brand href="#home">Defect Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="login">Login</Nav.Link>
                  {/* <Nav.Link href="admin">Admin</Nav.Link> */}
                  {/* <Nav.Link href="user">User</Nav.Link>
                  <Nav.Link href="viewdef">View Defect</Nav.Link> */}
                  {/* <Nav.Link href="tracker">Tracker</Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header