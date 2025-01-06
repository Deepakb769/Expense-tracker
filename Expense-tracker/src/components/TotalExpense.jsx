import React from 'react'
import { Card } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const TotalExpense = ({show}) => {
  return (
    <>
      {/* <Card style={{width : '18rem', height : '8rem'}}>
        <Card.Body>
            <Card.Title className='mb-2 text-muted'>Your Budget</Card.Title>
            <Card.Subtitle style={{fontSize : '25px'}}>20,000/m</Card.Subtitle>
        </Card.Body>
      </Card> */}
      <FloatingLabel label = "Total Expense" className="mb-3" style={{ borderRadius : '35px'}}>
        <Form.Control value={show} style={{fontSize : '30px'}} />
      </FloatingLabel> 
    </>
  )
}

export default TotalExpense
