import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const Header = () => {

  return (
    <>
      <Navbar className='bg-body-tertiary' style={{fontSize : '24px' ,marginBottom : '30px', borderRadius : '25px', boxShadow: 'rgba(28, 28, 30, 0.1) 0px 8px 32px 0px'
}}>
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
      </Container>
    </Navbar>
    </>
    
  )
}

export default Header
