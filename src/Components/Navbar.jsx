import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar expand="md" className="bg-body-tertiary fixed-top  shadow ">
      <Container>
        <div>
          <Navbar.Brand href="/">MyGariApp</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="/onboarding/account-creation">Signup</Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
