import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
      </Container>
    </Navbar>
    </>
    
  )
}

export default Header
