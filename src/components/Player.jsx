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
                    
                    {/* change with song img */}
                    <Button className="d-md-none footer text-secondary"><GiLoveSong /></Button>

                    {/* collapse in mobile */}
                    <Navbar.Collapse id="basic-navbar-nav" className="text-light">
                        <Button variant="dark" className="text-secondary bg-transparent border-0 player-buttons"><IoIosShuffle /></Button>
                        <Button variant="dark" className="text-secondary bg-transparent border-0 player-buttons"><TbPlayerTrackPrevFilled /></Button>
                        <Button variant="dark" className="text-secondary bg-transparent border-0 player-buttons"><FaPlay /></Button>
                        <Button variant="dark" className="text-secondary bg-transparent border-0 player-buttons"><TbPlayerTrackNextFilled /></Button>
                        <Button variant="dark" className="text-secondary bg-transparent border-0 player-buttons"><IoIosRepeat /></Button>
                    </Navbar.Collapse>

                    {/* title */}
                    <Navbar.Text className="text-light rounded-1 px-3 player-song-title w-100 w-md-auto text-center">{selectedSong.song + ' - ' + selectedSong.author}</Navbar.Text>

                    {/* another collapse */}
                    <Navbar.Collapse className="justify-content-end text-light" id="basic-navbar-nav">
                        <Button variant="danger" className="py-0 d-flex"><span className="pe-1"><FaUser className="accedi" /></span> <span>Accedi</span></Button>
                    </Navbar.Collapse>
                    {/* mobile play buttons */}
                    <div className="d-md-none">
                        <Button variant="dark player-buttons bg-transparent border-0"><FaPlay /></Button>
                        <Button variant="dark player-buttons bg-transparent border-0"><TbPlayerTrackNextFilled /></Button>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Player