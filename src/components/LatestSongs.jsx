import { useEffect, useRef, useState } from "react"
import { Alert, Button, Card, Col, NavDropdown, Row, Spinner } from "react-bootstrap"
import { FaPlay } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { selectSongAction } from "../redux/actions"
import { IoIosPause } from "react-icons/io"
import { RxDotsHorizontal } from "react-icons/rx"


const API = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

const LatestSongs = function () {

    const [songs, setSongs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    /* L'audio funziona ma al momento suona solo una canzone, attenzione alle orecchie, era solo una prova, non ho avuto tempo di implementarlo correttamente */
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const dispatch = useDispatch()

    const selectedArtist = useSelector((state) => {
        return state.selectedArtist
     })

    const getSongs = () => {

        fetch(API + selectedArtist)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('response not ok')
            }
        })
        .then((songsdata) => {
            console.log('data', songsdata)
            console.log('data', songsdata.data)
            // oggetto -> array(25)
            //img: data[0].album.cover
            // song: data[0].album.title
            // album: data[0].artist.name
            // data[0].preview

            /* const arrSongs = [...songsdata.data.slice(0, 2), ...songsdata.data.slice(4, 10)] */
            setSongs([...songsdata.data.slice(0, 10)])
            setIsLoading(false)
        })
        .catch((err) => {
            console.log('Errore nella fetch:', err)

            setIsLoading(false)
            setIsError(true)
        })

    }


    // audio
    const togglePlay = () => {
        if (!audioRef.current) return
    
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
    
        setIsPlaying(!isPlaying)
        
      }

    useEffect(()=>{
        getSongs()
    }, [selectedArtist])


    return(

        <>
        {/* spinner */}

        {
            isLoading === true && (
                <div className="text-center">
                    <Spinner variant="light" animation="border"  />
                </div>
            )
        }

        {/* ERRORE */}
            {
                isError && (
                    <Alert variant='danger' className="text-center">
                        <i className="bi bi-bug"></i> Errore nella fetch <i className="bi bi-bug"></i>
                    </Alert>
                )
            }

        {
            songs.map((song, i) =>(
                
                <Col xs={6} lg={3} key={song.id} >
                        <Row className="text-light m-1 py-1 row-mini-card-border">
                            <Col xs={3} className="mini-card-img position-relative"><img src={song.album.cover_big} alt="" className="small-card-img " /><div className=" play-btn-overlay-small-card"><FaPlay /></div></Col>
                            <Col xs={7}>
                                <p className="accedi m-0 p-0">{song.album.title}</p>
                                <p className="accedi m-0 p-0">{song.artist.name}</p>
                            </Col>
                            <Col xs={2} className="text-danger align-self-center">
                                <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={<RxDotsHorizontal />}
                                menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">View Credits</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" >
                                        Share
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" >Copy Link</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                        Copy Embedded Code
                                    </NavDropdown.Item>
                                </NavDropdown>
                                    
                                
                            </Col>
                        </Row>
                    </Col>
                )
                
            )
        }

        </>
    )
}

export default LatestSongs