import React, { useEffect, useState } from 'react'
import BudgetSet from './BudgetSet'
import TotalExpense from './TotalExpense'
import { Container } from 'react-bootstrap'
import AmtRemain from './AmtRemain'

const BudgetCal = ({value, show}) => {
  let [remainValue, setRemainValue] = useState(0)

  useEffect(() => {
    setRemainValue(value - show);
  }, [value, show]);

  return (
    <>
    <Container className='d-flex' style={{justifyContent : 'space-between', margin : '25px', padding : '0'}}>
      <BudgetSet value={value} />
      <TotalExpense show={show}/>
      <AmtRemain value={value} remainValue={remainValue} />
    </Container>
    </>
  )
}

export default BudgetCal
