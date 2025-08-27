import { useState } from "react"
import { Container, Form, Nav, Navbar } from "react-bootstrap"
import { IoIosRadio } from "react-icons/io"
import { PiSquaresFourLight } from "react-icons/pi"
import { RiHome2Line } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"

const MyNavbarMobile = function () {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const location = useLocation

    return(
        <header className="flex-grow-1 p-1 d-md-none">
            <Navbar expand="md" className="p-0">
                <Container fluid className="d-flex flex-md-column">
                    <Navbar.Toggle aria-controls="navbarScroll" id="toggol" className="p-1"/>
                    <Navbar.Brand className="d-md-none bg-transparent" href="#"><img src="music.svg" alt="eppol logo" className="eppol-logo" /></Navbar.Brand>
                    <Nav.Link href="#action1" className="d-md-none text-danger">Accedi</Nav.Link>
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
                                <Nav.Link href="#action1" className={location.pathname === '/' ? "text-light py-1" : ' text-light py-1 nav-link-selected rounded-2'}><RiHome2Line className="text-danger" /> Home</Nav.Link>
                                <Nav.Link href="#action2" className={location.pathname === '/' ? "text-light py-1" : ' text-light py-1 nav-link-selected rounded-2'}><PiSquaresFourLight className="text-danger"/> Novità</Nav.Link>
                                <Nav.Link href="#action3" className={location.pathname === '/' ? "text-light py-1" : ' text-light py-1 nav-link-selected rounded-2'}><IoIosRadio className="text-danger"/> Radio</Nav.Link>
                            </div>
                            
                        </Nav>
                        
                    </Navbar.Collapse>

                </Container>
            </Navbar>    
        
        </header>
    )
}

export default MyNavbarMobile