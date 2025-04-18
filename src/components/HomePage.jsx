import { Button, Card, Col, Row } from "react-bootstrap"
import NuoveUscite from "./NuoveUscite"
import { MdNavigateNext } from "react-icons/md"


const HomePage = function () {
    return (
        <div className="flex-grow-1 main p-3">
            <Row className="justify-content-center m-0">
                <h1 className="text-light">Novità</h1>
                <hr className="text-light" />
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
            </Row>

            {/* nuovi episodi radio */}
            <Row className="justify-content-center m-0">
                <h4 className="text-light">Nuovi episodi radio <MdNavigateNext /></h4>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2a.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="fs-6 text-secondary">Pròlogo con abuelo</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2b.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="fs-6 text-secondary">The wanderer</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2c.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="fs-6 text-secondary">Michael Bublé & Carly Pearce</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2d.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="fs-6 text-secondary">Stephan Moccio: The Zane Lowe Interview</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2e.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="fs-6 text-secondary">Chart Spotilight: Julia Michaels</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2f.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title className="fs-6 text-secondary">Karri & Travis Mills</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            {/* nuove uscite */}
            <Row className="justify-content-center m-0 my-3">
                <h4 className="text-light">Nuove Uscite <MdNavigateNext /></h4>
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

export default HomePage