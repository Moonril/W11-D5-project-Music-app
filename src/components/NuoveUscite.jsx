import { useEffect, useState } from "react"
import { Alert, Card, Col, Spinner } from "react-bootstrap"

const API = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=electrcicallboys'

const NuoveUscite = function () {

    const [songs, setSongs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const getSongs = () => {

        fetch(API)
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
            // 0-2 + 4-10

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

    useEffect(()=>{
        getSongs()
    }, [])


    return(

        <>
        {/* spinner */}

        {
            isLoading === true && (
                <div className="text-center">
                    <Spinner variant="primary" animation="border"  />
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
                
                <Col xs={4} md={3} key={song.id} >
                                <Card className="border-0 bg-transparent" >
                                    <Card.Img variant="top" src={song.album.cover_big} />
                                    <Card.Body className="px-0 bg-transparent text-light">
                                        <Card.Title className="fs-6">{song.album.title}</Card.Title>
                                        <Card.Text className="fs-6 text-secondary">{song.artist.name}</Card.Text>
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