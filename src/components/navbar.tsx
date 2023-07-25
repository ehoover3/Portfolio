import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        {/* <Navbar.Brand className='logo' href='#'> */}
        {/* Eric Hoover */}
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls='navbarScroll' />

        <Navbar.Collapse>
          {/* <Nav className='ms-auto me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }}> */}
          <Nav className='ms-auto my-2 my-lg-0' style={{ maxHeight: "100px" }}>
            {/* <Nav.Link href='#'>Career</Nav.Link> */}
            {/* <Nav.Link href='#'>Colleges</Nav.Link> */}
            {/* <Nav.Link href='#'>Plan</Nav.Link> */}
          </Nav>
          {/* <Btn cn='btn-transparent navbar-btn' name='Sign Up' /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
