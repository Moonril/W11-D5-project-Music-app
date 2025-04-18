import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import HomePage from './components/HomePage'
import Player from './components/Player'

function App() {


  return (
    <main className="">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} className='d-flex flex-column p-0' >
      <MyNavbar />
          </Col>
          <Col xs={12} md={9} className='d-flex flex-column vh-100 p-0' >
      
      <Player />
      <HomePage />


      <MyFooter />
          </Col>
          
        </Row>


      </Container>
    
    
      
    </main>

  )
}

export default App
