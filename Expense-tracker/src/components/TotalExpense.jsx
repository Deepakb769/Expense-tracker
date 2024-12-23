import React from 'react'
import { Card } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const TotalExpense = ({showFormB}) => {
  return (
    <div>
      {/* <Card style={{width : '18rem', height : '8rem'}}>
        <Card.Body>
            <Card.Title className='mb-2 text-muted'>Your Budget</Card.Title>
            <Card.Subtitle style={{fontSize : '25px'}}>20,000/m</Card.Subtitle>
        </Card.Body>
      </Card> */}
      <FloatingLabel label = "Total Expense" className="mb-3" >
        <Form.Control type='number' value={0} style={{fontSize : '30px'}} />
      </FloatingLabel> 
    </div>
  )
}

export default TotalExpense
