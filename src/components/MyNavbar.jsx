import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { CiSearch } from "react-icons/ci"
import { IoIosRadio } from "react-icons/io"
import { PiSquaresFourLight } from "react-icons/pi"
import { RiHome2Line } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { searchArtistAction } from "../redux/actions"
import { useState } from "react"

const MyNavbar = function () {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    return (
        <header className="bg-dark flex-grow-1 p-1">
            <Navbar expand="md" className="bg-body-tertiary p-0">
                <Container fluid className="d-flex flex-md-column bg-dark">
                    <Navbar.Brand className="d-none d-md-block bg-transparent py-2" href="#"><img src="music.svg" alt="eppol logo" className="eppol-logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" id="toggol" className="p-1"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex flex-column bg-dark text-light"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Form className="d-flex py-2" onSubmit={(e) => {
                                e.preventDefault()
                                dispatch(searchArtistAction(inputValue))
                            }}>
                                <Form.Control
                                type="search"
                                placeholder="&#x1F50E;&#xFE0E; Search"
                                className="me-2"
                                aria-label="Search"
                                value={inputValue}
                                data-bs-theme="dark"
                                onChange={(e) => setInputValue(e.target.value)}
                                />
                            </Form>
                            <div className="py-2">
                                <Nav.Link href="#action1" className="text-light py-1"><RiHome2Line className="text-danger" /> Home</Nav.Link>
                                <Nav.Link href="#action2" className="text-light py-1"><PiSquaresFourLight className="text-danger"/> Novità</Nav.Link>
                                <Nav.Link href="#action3" className="text-light py-1"><IoIosRadio className="text-danger"/> Radio</Nav.Link>
                            </div>
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                    <Navbar.Brand className="d-md-none bg-transparent" href="#"><img src="music.svg" alt="eppol logo" className="eppol-logo" /></Navbar.Brand>
                    <Nav.Link href="#action1" className="d-md-none text-danger">Accedi</Nav.Link>
                </Container>
            </Navbar>    
        
        </header>
    )
}

export default MyNavbar