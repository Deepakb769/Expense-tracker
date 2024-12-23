import React from 'react'
import BudgetSet from './BudgetSet'
import TotalExpense from './TotalExpense'
import { Container } from 'react-bootstrap'

const BudgetCal = () => {
  return (
    <>
    <Container className='d-flex' style={{justifyContent : 'space-between', margin : '25px', padding : '0'}}>
      <BudgetSet />
      <TotalExpense />
    </Container>
    </>
  )
}

export default BudgetCal
