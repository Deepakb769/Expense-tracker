import React, { useEffect, useState } from 'react'
import BudgetSet from './BudgetSet'
import TotalExpense from './TotalExpense'
import { Container } from 'react-bootstrap'
import AmtRemain from './AmtRemain'

const BudgetCal = ({para, show}) => {
  let [remainValue, setRemainValue] = useState(0)

  useEffect(() => {
    setRemainValue(para-show)
  }, [para, show]);


  return (
    <>
      <Container className='d-flex' style={{display : 'flex', justifyContent : 'space-evenly', margin : '20px 94px', padding : '0'}}>
        <div style={{marginRight : '0'}} >
          <BudgetSet para={para} readOnly/>
        </div>
        <div style={{marginRight : '0'}} >
          <TotalExpense show={show} budgetSet={para} readOnly/>
        </div>
        <div style={{marginRight : '0'}} >
          <AmtRemain para={para} remainValue={remainValue} readOnly/>
        </div>
      </Container>    
    </>
  )
}

export default BudgetCal
