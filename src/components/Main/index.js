import React, { useEffect, useState } from 'react'
import { Row, Col, Container, NavLink } from 'reactstrap'
import { renderRoutes } from 'react-router-config'
import { withRouter, Link } from 'react-router-dom'

const Main = ({ route, location }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    if (location.pathname !== '/') setShowSidebar(true)
  }, [location.pathname])

  return (
    <Row className="mx-0 px-0 px-lg-5">
      <Col lg={showSidebar ? 8 : 12} className="px-0 px-lg-2">
        <Container className="my-2 px-3 py-2">
          <Row>
            <Col>
              {renderRoutes(route.routes)}
            </Col>
          </Row>
        </Container>
      </Col>
      {showSidebar &&
      <Col lg={4}>
        <Container className="my-2 px-3 py-2">
          <h4>Рубрики</h4>
          <ul>
            <li><NavLink tag={Link} to="/">Новости</NavLink></li>
            <li><NavLink tag={Link}>ОколоIT</NavLink></li>
            <li><NavLink tag={Link}>Рассказы</NavLink></li>
          </ul>

        </Container>
        <Container className="my-2 px-3 pt-2 pb-3">
          <h4>Реклама</h4>
          <div style={{ height: '250px', width: '100%', background: 'rgba(255,255,255,1)' }}></div>
        </Container>
      </Col>
      }
    </Row>
  )
}

export default withRouter(Main)
