import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar className='bg-body-tertiary' style={{marginBottom : '30px', borderRadius : '25px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}}>
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
      </Container>
    </Navbar>
    </>
    
  )
}

export default Header
