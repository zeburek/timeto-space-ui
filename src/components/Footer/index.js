import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, NavLink } from 'reactstrap'

const Footer = () => {
  return (
    <footer>
      <Row className="mx-0 px-3 pt-3 bg-dark-header small-text">
        <Col md={1} />
        <Col md={3}>
          <h6>Сайт</h6>
          <ul>
            <li><NavLink tag={Link} to="/">Новости</NavLink></li>
            <li><NavLink tag={Link}>ОколоIT</NavLink></li>
            <li><NavLink tag={Link}>Рассказы</NavLink></li>
          </ul>

        </Col>
        <Col md={3}>
          <h6>Контакты</h6>
          <ul>
            <li><NavLink tag={Link}>О нас</NavLink></li>
            <li><NavLink tag={Link}>Github</NavLink></li>
          </ul></Col>
        <Col md={3}>
          <h6>2019 © timeto.space</h6>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
