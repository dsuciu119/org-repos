import { Nav, Container, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container className={'border-bottom py-3 mb-4'}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/organizations">Organizations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
