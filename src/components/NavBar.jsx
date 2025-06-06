import { Container, Form, FormControl, Navbar as BootstrapNavbar } from 'react-bootstrap'

export default function NavBar({ onSearch }) {
  return (
    <BootstrapNavbar bg="light" expand="lg" className="mb-0">
      <Container>
        <BootstrapNavbar.Brand href="/">Café Quiet</BootstrapNavbar.Brand>
        <Form className="d-flex ms-auto">
          <FormControl
            type="search"
            placeholder="Search cafes..."
            className="me-2"
            onChange={(e) => onSearch(e.target.value)}
          />
        </Form>
      </Container>
    </BootstrapNavbar>
  )
}
