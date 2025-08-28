import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import HomePage from './components/HomePage'
import Player from './components/Player'
import MyNavbarMobile from './components/MyNavbarMobile'
import { Routes, Route } from "react-router-dom"
import NewPage from './components/NewPage'
import RadioPage from './components/RadioPage'

function App() {


  return (
    <main className="">
      <Container fluid>
        <Row>
          <Col xs={12} md={3} lg={2} className='sidebar-fixed d-none d-md-flex flex-column p-0' >
            <MyNavbar />
          </Col>
          <Col xs={12} md={9} lg={10} className=' offset-md-3 offset-lg-2 d-flex flex-column vh-100 p-0' >
            <MyNavbarMobile />
            <Player />
            <Routes>
              <Route path='/' element={<HomePage />} />  
              <Route path='/new' element={<NewPage />} />  
              <Route path='/radio' element={<RadioPage />} />  
            </Routes>
            
            <MyFooter />
          </Col>
        </Row>
      </Container>
    </main>

  )
}

export default App
