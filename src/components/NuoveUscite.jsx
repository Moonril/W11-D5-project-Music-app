import { useEffect, useRef, useState } from "react"
import { Alert, Button, Card, Col, Spinner } from "react-bootstrap"
import { FaPlay } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { selectSongAction } from "../redux/actions"
import { IoIosPause } from "react-icons/io"


const API = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

const NuoveUscite = function () {

    const [songs, setSongs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    /* L'audio funziona ma al momento suona solo una canzone, attenzione alle orecchie, era solo una prova, non ho avuto tempo di implementarlo correttamente */
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentPlayingSong, setCurrentPlayingSong] = useState(null)

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
            //console.log('api response object', songsdata)
            console.log('api response, list of songs', songsdata.data)


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
    const togglePlay = (song) => {
        if (!audioRef.current) return
    
        if (currentPlayingSong && currentPlayingSong.id === song.id) {
            if (isPlaying) {
            audioRef.current.pause()
            } else {
            audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
            } else {
            
            setCurrentPlayingSong(song)
            audioRef.current.src = song.preview
            audioRef.current.play()
            setIsPlaying(true)
        }
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

        <audio ref={audioRef} /> {/* audio works, just very loud */}

        {
            songs.map((song, i) =>(
                
                <Col xs={4} md={3} key={song.id} >
                                <Card className="border-0 bg-transparent" >
                                    <Card.Img variant="top" src={song.album.cover_big} />
                                    <Card.Body className="px-0 bg-transparent text-light d-flex justify-content-between">
                                        <div>
                                            <Card.Title className="fs-6">{song.title}</Card.Title>
                                            <Card.Text className="fs-6 text-secondary">{song.artist.name}</Card.Text>
                                        </div>
                                        
                                        <div><Button className="text-secondary bg-transparent border-0" onClick={()=>{
                                            dispatch(selectSongAction(song.album.title, song.artist.name))
                                            togglePlay(song)
                                        }}>{isPlaying ? <IoIosPause /> : <FaPlay />}</Button></div>
                                        
                                    </Card.Body>
                                </Card>
                    </Col>
                )
                
            )
        }

        </>
    )
}

export default NuoveUscite