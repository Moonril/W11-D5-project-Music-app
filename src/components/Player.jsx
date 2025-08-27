import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FaPlay, FaUser, FaUserAlt } from "react-icons/fa"
import { GiLoveSong } from "react-icons/gi"
import { IoIosRepeat, IoIosShuffle } from "react-icons/io"
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb"
import { useSelector } from "react-redux"

const Player = function () {

    const selectedSong = useSelector((state) => {
       return state.selectedSong
    })


    return(
        <div id="player">
            <Navbar expand="md" className="text-light">
                <Container>
                    
                    <Button className="d-md-none footer text-secondary"><GiLoveSong /></Button>
                    <Navbar.Collapse id="basic-navbar-nav" className="text-light">
                        <Button variant="dark" className="text-secondary"><IoIosShuffle /></Button>
                        <Button variant="dark" className="text-secondary"><TbPlayerTrackPrevFilled /></Button>
                        <Button variant="dark" className="text-secondary"><FaPlay /></Button>
                        <Button variant="dark" className="text-secondary"><TbPlayerTrackNextFilled /></Button>
                        <Button variant="dark" className="text-secondary"><IoIosRepeat /></Button>
                    </Navbar.Collapse>

                    <Navbar.Text className="text-light bg-secondary rounded-1 px-3">{selectedSong.song + ' - ' + selectedSong.author}</Navbar.Text>
                    <Navbar.Collapse className="justify-content-end text-light" id="basic-navbar-nav">
                        <Button variant="danger" className="py-0 d-flex"><span className="pe-1"><FaUser className="accedi" /></span> <span>Accedi</span></Button>
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