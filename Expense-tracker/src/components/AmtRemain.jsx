import React from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const AmtRemain = ({para, remainValue}) => {
  return (
    <>
      <FloatingLabel label = 'Amount Remaining' className="mb-3" style={{ borderRadius : '35px'}}>
        {remainValue > 0 ?
          <Form.Control type='number' value={remainValue} readOnly  style={{fontSize : '30px', boxSizing : 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}} />
         : 
         <Form.Control type='number' value={para} readOnly style={{fontSize : '30px', boxSizing : 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}} />}
        
      </FloatingLabel>
    </>
  )
}

export default AmtRemain
