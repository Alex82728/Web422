import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNav() {
  return (
    <Navbar className="fixed-top navbar-dark bg-dark" expand="lg">
      <Container>
        <Navbar.Brand>Alexandru Zaporojan</Navbar.Brand>
        <Nav className="ml-auto">
          <Link href="/" passHref legacyBehavior>
            <Nav.Link>Listings</Nav.Link>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <Nav.Link>About</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
