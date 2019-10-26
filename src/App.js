import React from 'react'
import { Container } from 'reactstrap'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './App.less'
import Header from './components/Header'
import Footer from './components/Footer'
import { routes } from './routes'

function App () {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header name="main-header"/>
        {renderRoutes(routes)}
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
