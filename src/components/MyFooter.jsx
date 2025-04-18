import { Col, Row } from "react-bootstrap"

const MyFooter = function () {
    return (
        <footer className="bg-secondary">
            <Row>
                <Col xs={2} >Italia</Col>
                <Col xs={2}>English (uk)</Col>
            </Row>
            <Row>
                <Col>Copyright</Col>
            </Row>
            <Row className="">
                <Col xs={3}>condizioni dei servizi internet</Col>
                <Col xs={3}>Aplle Music e privacy</Col>
                <Col xs={3}> Avviso sui cookie</Col>
                <Col xs={3}>Supporto</Col>
                <Col xs={3}>Feedback</Col>
            </Row>
        </footer>
    )
}

export default MyFooter