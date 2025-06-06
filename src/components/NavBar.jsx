import { Container, Form, FormControl, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';


export default function NavBar({ onSearch, filterPins, onTogglePins }) {
  return (
    <BootstrapNavbar bg="light" expand="lg" className="mb-0">
      <Container>
        <BootstrapNavbar.Brand href="/"className="fs-3 fw-bold">
          Café Quiet
        </BootstrapNavbar.Brand>

        <Form className="d-flex ms-auto">
          <FormControl
            type="search"
            placeholder="Search cafes..."
            className="me-2"
            onChange={(e) => onSearch(e.target.value)}
          />
        </Form>

        <Button
          variant="outline-primary"
          size="sm"
          onClick={onTogglePins}
        >
          {filterPins ? "Show All Pins" : "Filter Pins by Search"}
        </Button>

      </Container>
    </BootstrapNavbar>
  )
}
