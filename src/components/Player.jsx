import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FaPlay } from "react-icons/fa"
import { GiLoveSong } from "react-icons/gi"
import { IoIosRepeat, IoIosShuffle } from "react-icons/io"
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb"

const Player = function () {
    return(
        <div id="player">
            <Navbar expand="md" className="bg-dark border-start border-black text-light rounded-2">
                <Container>
                    
                    <Button variant="secondary d-md-none"><GiLoveSong /></Button>
                    <Navbar.Collapse id="basic-navbar-nav" className="text-light">
                    <Button variant="dark" className="text-secondary"><IoIosShuffle /></Button>
                    <Button variant="dark" className="text-secondary"><TbPlayerTrackPrevFilled /></Button>
                    <Button variant="dark" className="text-secondary"><FaPlay /></Button>
                    <Button variant="dark" className="text-secondary"><TbPlayerTrackNextFilled /></Button>
                    <Button variant="dark" className="text-secondary"><IoIosRepeat /></Button>
                    </Navbar.Collapse>

                    <Navbar.Text className="text-light bg-secondary">Song Name - Artist Name</Navbar.Text>
                    <Navbar.Collapse className="justify-content-end text-light" id="basic-navbar-nav">
                        <Button variant="danger">Accedi</Button>
                    </Navbar.Collapse>
                    <div className="d-md-none">
                        <Button variant="dark"><FaPlay /></Button>
                        <Button variant="dark"><TbPlayerTrackNextFilled /></Button>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Player