import React from 'react';
import { Container, Navbar, Nav, NavDropdown , FormControl, Button , Form} from 'react-bootstrap';



const Header = () => {

    return (
        <>


        
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Bike rent</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Price</Nav.Link>
        <Nav.Link href="#action2">Contacts</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">+8(808)8888888</NavDropdown.Item>
          <NavDropdown.Item href="#action4">instagram</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Contacts
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        </>




    )}


    export default Header;

