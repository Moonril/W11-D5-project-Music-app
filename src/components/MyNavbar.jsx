import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { CiSearch } from "react-icons/ci"
import { IoIosRadio } from "react-icons/io"
import { PiSquaresFourLight } from "react-icons/pi"
import { RiHome2Line } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { searchArtistAction } from "../redux/actions"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const MyNavbar = function () {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const location = useLocation()

    return (
        <header className="flex-grow-1 p-1">
            <Navbar expand="md" className="p-0">
                <Container fluid className="d-flex flex-md-column">
                    <Navbar.Brand className="d-none d-md-block bg-transparent align-self-start ps-3" href="#"><img src="music.svg" alt="eppol logo" className="eppol-logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" id="toggol" className="p-1"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex flex-column text-light"
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
                                <Nav.Link as={Link} to='/' className={location.pathname === '/' ? ' text-light py-1 nav-link-selected rounded-2' : "text-light py-1"}><RiHome2Line className="text-danger" /> Home</Nav.Link>

                                <Nav.Link as={Link} to='/new' className={location.pathname === '/new' ? ' text-light py-1 nav-link-selected rounded-2' : "text-light py-1"}><PiSquaresFourLight className="text-danger"/> Novità</Nav.Link>

                                <Nav.Link as={Link} to='/radio' className={location.pathname === '/radio' ? ' text-light py-1 nav-link-selected rounded-2' : "text-light py-1"}><IoIosRadio className="text-danger"/> Radio</Nav.Link>
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