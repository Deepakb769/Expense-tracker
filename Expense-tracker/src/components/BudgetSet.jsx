import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FaPen } from "react-icons/fa";

const BudgetSet = ({para}) => {
  
  return (
    <div>
      <FloatingLabel label = 'Your Budget' className="mb-3" style={{ borderRadius : '35px'}}>
        <Form.Control value={para}  style={{fontSize : '30px', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}} />
      </FloatingLabel>
    </div>
  )
}

export default BudgetSet;
