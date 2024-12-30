import React, { useEffect, useState } from 'react'
import BudgetSet from './BudgetSet'
import TotalExpense from './TotalExpense'
import { Container } from 'react-bootstrap'
import AmtRemain from './AmtRemain'

const BudgetCal = ({para, show}) => {
  let [remainValue, setRemainValue] = useState(0)

  useEffect(() => {
    setRemainValue(para - show);
  }, [para, show]);

  return (
    <>
    <Container className='d-flex' style={{justifyContent : 'space-between', margin : '25px', padding : '0'}}>
      <BudgetSet para={para} readOnly />
      <TotalExpense show={show} readOnly/>
      <AmtRemain para={para} remainValue={remainValue} readOnly/>
    </Container>
    </>
  )
}

export default BudgetCal
