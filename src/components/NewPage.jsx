import { Button, Card, Col, Row } from "react-bootstrap"
import NuoveUscite from "./NuoveUscite"
import { MdNavigateNext } from "react-icons/md"
import LatestSongs from "./LatestSongs"


const NewPage = function () {
    return (
        <div className="flex-grow-1 main p-3">
                <h1 className="text-light ps-2">New</h1>
            <Row className="p-1 pb-2 p-lg-3 justify-content-start m-0 flex-nowrap overflow-auto" style={{ gap: '0.5rem' }}>
                <Col xs={6} >
                    <Card className="border-0 bg-transparent">
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="text-secondary fs-6">NUOVA STAZIONE RADIO</Card.Title>
                            <Card.Text>
                            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="1a.png" />
                    </Card>
                </Col>
                <Col xs={6} >
                    <Card className="border-0 bg-transparent">
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="text-secondary fs-6">NUOVA STAZIONE RADIO</Card.Title>
                            <Card.Text>
                            Ecco la nuova casa della musica latina e del Reggaetton.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="1b.png" />
                    </Card>
                </Col>
                <Col xs={6} >
                    <Card className="border-0 bg-transparent">
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="text-secondary fs-6">NUOVA STAZIONE RADIO</Card.Title>
                            <Card.Text>
                            Ecco la nuova casa della musica latina e del Reggaetton.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="1c.png" />
                    </Card>
                </Col>
                {/* altra card qua + scorrimento */}
            </Row>

            {/* latest songs */}
            <Row className="justify-content-center m-0 my-4">
                <h4 className="text-light">Latest Songs <MdNavigateNext /></h4>
                <LatestSongs />
            </Row>

            

            {/* nuove uscite */}
            <Row className="justify-content-center m-0 my-3">
                <h4 className="text-light">New Releases <MdNavigateNext /></h4>
                <NuoveUscite />

            </Row>

            {/* Altro da esplorare */}
            <Row className="justify-content-center m-0 g-3 py-2">
            <h4 className="text-light">Altro da esplorare</h4>
                <Col xs={6} md={4}>
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Esplora per genere</Button>
                </Col>
                <Col xs={6} md={4} >
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Worldwide</Button>
                </Col>
                <Col xs={6} md={4} >
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Video musicali</Button>
                </Col>
                <Col xs={6} md={4} >
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Decenni</Button>
                </Col>
                <Col xs={6} md={4} >
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Classifiche</Button>
                </Col>
                <Col xs={6} md={4} >
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Nuovi artisti</Button>
                </Col>
                <Col xs={6} md={4} >
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Attività e stati d'animo</Button>
                </Col>
                <Col xs={6} md={4} >
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Audio spaziale</Button>
                </Col>
                <Col xs={6} md={4} >
                    <Button className="bg-dark border-0 w-100 text-start text-danger">Hit del passato</Button>
                </Col>
                

            </Row>


            
        </div>
    )
}

export default NewPage