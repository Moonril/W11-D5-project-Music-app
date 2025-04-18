import { useState } from "react"
import { Card, Col } from "react-bootstrap"

const NuoveUscite = function () {

    const [song, setSong] = useState()


    return(
        <Col xs={4} md={2.4} >
                    <Card className="border-0 bg-transparent">
                        <Card.Img variant="top" src="2f.png" />
                        <Card.Body className="px-0 bg-transparent text-light">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>something</Card.Text>
                        </Card.Body>
                    </Card>
        </Col>
    )
}

export default NuoveUscite