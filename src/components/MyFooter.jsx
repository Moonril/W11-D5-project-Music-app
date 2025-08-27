import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyFooter = function () {
    return (
        <footer className="footer px-4 py-2 text-secondary">
            <Row className="text-start py-1">
                <Col xs={4} md={3} lg={2} className="border-end border-secondary"><a href="" className="text-light text-decoration-none">Italia</a></Col>
                <Col xs={4} md={3} lg={2} className="border-end border-secondary text-center"><a href="" className="text-secondary text-decoration-none">English (uk)</a></Col>
                <Col xs={4} md={3} lg={2}><a href="" className="text-secondary text-decoration-none text-center">Español (España)</a></Col>
            </Row>
            <Row className="py-1">
                <Col>Copyright &copy; {new Date().getFullYear()} <span className="text-light">Apple Inc.</span> All rights reserved.</Col>
            </Row>
            <Row className="py-1 text-center">
                <Col xs={2} className="border-end border-secondary px-1"><a href="" className="text-secondary text-decoration-none">condizioni dei servizi internet</a></Col>
                <Col xs={2} className="border-end border-secondary px-1">Apple Music e privacy</Col>
                <Col xs={2} className="border-end border-secondary px-1"> Avviso sui cookie</Col>
                <Col xs={2} className="border-end border-secondary px-1">Supporto</Col>
                <Col xs={2} className=" px-1">Feedback</Col>
            </Row>
        </footer>
    )
}

export default MyFooter