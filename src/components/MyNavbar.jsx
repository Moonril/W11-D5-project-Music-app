import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"

const MyNavbar = function () {
    return (
        <header className="bg-dark flex-grow-1">
            <Navbar expand="lg" className="bg-body-tertiary p-0">
                <Container fluid className="d-flex flex-md-column bg-dark">
                    <Navbar.Brand className="d-none d-md-block" href="#"><img src="music.svg" alt="eppol logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex flex-column bg-dark text-light"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                        </Form>
                            <Nav.Link href="#action1" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#action2" className="text-light">Novità</Nav.Link>
                            <Nav.Link href="#action3" className="text-light">Radio</Nav.Link>
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                    <Navbar.Brand className="d-md-none" href="#"><img src="music.svg" alt="eppol logo" /></Navbar.Brand>
                    <Nav.Link href="#action1" className="d-md-none text-light">Accedi</Nav.Link>
                </Container>
            </Navbar>    
        
        </header>
    )
}

export default MyNavbar