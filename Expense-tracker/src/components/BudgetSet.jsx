import React from 'react'
import { Card } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FaPen } from "react-icons/fa";

const BudgetSet = ({showFormA}) => {
  return (
    <div>
      {/* <Card style={{width : '18rem', height : '8rem'}}>
        <Card.Body>
            <Card.Title className='mb-2 text-muted'>Your Budget</Card.Title>
            <Card.Subtitle style={{fontSize : '25px'}}>20,000/m</Card.Subtitle>
        </Card.Body>
      </Card> */}
      <FloatingLabel label = 'Your Budget' className="mb-3" >
        <Form.Control type='number' value={0} style={{fontSize : '30px', boxSizing : 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', borderRadius : '15px'}} />
      </FloatingLabel>
    </div>
  )
}

export default BudgetSet;
