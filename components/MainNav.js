import { Navbar, Nav, Container } from 'react-bootstrap';  // Import necessary components from react-bootstrap
import Link from 'next/link';  // Import Link from Next.js for client-side navigation

export default function MainNav() {
  return (
    <Navbar className="fixed-top navbar-dark bg-dark" expand="lg">
      <Container>
        {/* Replace "Student Name" with your name */}
        <Navbar.Brand>John Doe</Navbar.Brand>

        {/* Navigation Links */}
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
