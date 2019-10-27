import React from 'react'
import { Container } from 'reactstrap'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './App.less'
import Header from './components/Header'
import Footer from './components/Footer'
import { routes } from './routes'
import LoadingProvider from './providers/LoadingProvider'
import Spinner from './components/Spinner'

function App () {
  return (
    <Container fluid>
      <BrowserRouter>
        <LoadingProvider>
          <Spinner />
          <Header name="main-header"/>
          {renderRoutes(routes)}
          <Footer />
        </LoadingProvider>
      </BrowserRouter>
    </Container>
  )
}

export default App
