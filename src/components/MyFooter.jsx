import { Col, Row } from "react-bootstrap"

const MyFooter = function () {
    return (
        <footer className="footer px-4 py-2 text-secondary">
            <Row className="text-start py-1">
                <Col xs={2} className="text-light px-1">Italia</Col>
                <Col xs={2}>English (uk)</Col>
            </Row>
            <Row className="py-1">
                <Col className="px-1">Copyright &copy; {new Date().getFullYear()} Apple Inc. Tutti i diritti riservati.</Col>
            </Row>
            <Row className="py-1 text-start">
                <Col xs={3} className=" px-1">condizioni dei servizi internet</Col>
                <Col xs={2} className=" px-1">Apple Music e privacy</Col>
                <Col xs={2} className=" px-1"> Avviso sui cookie</Col>
                <Col xs={2} className=" px-1">Supporto</Col>
                <Col xs={2} className=" px-1">Feedback</Col>
            </Row>
        </footer>
    )
}

export default MyFooter