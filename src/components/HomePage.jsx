import { Button, Card, Col, Row } from "react-bootstrap"
import NuoveUscite from "./NuoveUscite"


const HomePage = function () {
    return (
        <div className="flex-grow-1 main">
            <Row className="justify-content-center m-0">
                <h1 className="text-light">Novità</h1>
                <hr className="text-light" />
                <Col xs={6} >
                    <Card className="border-0 bg-transparent">
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="1a.png" />
                    </Card>
                </Col>
                <Col xs={6} >
                    <Card className="border-0 bg-transparent">
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="1b.png" />
                    </Card>
                </Col>
            </Row>

            {/* nuovi episodi radio */}
            <Row className="justify-content-center m-0">
                <h4 className="text-light">Nuovi episodi radio</h4>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2a.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2b.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2c.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2d.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2e.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2f.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            {/* nuove uscite */}
            <Row className="justify-content-center m-0">
                <h4 className="text-light">Nuove Uscite</h4>
                <NuoveUscite />

            </Row>

            {/* Altro da esplorare */}
            <Row className="justify-content-center m-0 g-3">
            <h4 className="text-light">Altro da esplorare</h4>
                <Col xs={4} md={2.4} >
                    <Button className="bg-dark border-0 w-100 text-start">Hello</Button>
                </Col>
                <Col xs={4} md={2.4} >
                    <Button className="bg-dark border-0 w-100 text-start">Hello</Button>
                </Col>
                <Col xs={4} md={2.4} >
                    <Button className="bg-dark border-0 w-100 text-start">Hello</Button>
                </Col>
                <Col xs={4} md={2.4} >
                    <Button className="bg-dark border-0 w-100 text-start">Hello</Button>
                </Col>
                <Col xs={4} md={2.4} >
                    <Button className="bg-dark border-0 w-100 text-start">Hello</Button>
                </Col>
                <Col xs={4} md={2.4} >
                    <Button className="bg-dark border-0 w-100 text-start">Hello</Button>
                </Col>
                

            </Row>


            
        </div>
    )
}

export default HomePage