import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import NavDivider from './NavDivider'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <header>
      <Navbar light className="bg-dark-header">
        <div className="px-lg-5 d-flex navbar-expand-md justify-content-between w-100 flex-wrap flex-md-nowrap">
          <NavbarBrand>
            <div className="header">timeto</div>
            <div className="sub-header">space</div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse navbar isOpen={isOpen}>
            <Nav navbar>
              <NavItem >
                <NavLink href="#">
                Новости
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                ОколоIT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                Рассказы
                </NavLink>
              </NavItem>
              <NavDivider />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Админ
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                  Профиль
                  </DropdownItem>
                  <DropdownItem>
                  Панель управления
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  Выйти
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
