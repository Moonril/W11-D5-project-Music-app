import { Card, Col, Row } from "react-bootstrap"
import { MdNavigateNext } from "react-icons/md"
import NuoveUscite from "./NuoveUscite"

const RadioPage = function (){
    return (
        <div className="flex-grow-1 main p-3">

            <h1 className="text-light ps-2">Radio</h1>
            <h4 className="text-light ps-2">On Air now <MdNavigateNext /></h4>
            {/* nuovi episodi radio */}
            <Row className="p-1 pb-2 p-lg-3 justify-content-start m-0 flex-nowrap overflow-auto">
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

            <Row className="justify-content-center m-0 my-3">
                <h4 className="text-light">New Releases <MdNavigateNext /></h4>
                <NuoveUscite />

            </Row>


        </div>
    )
}

export default RadioPage