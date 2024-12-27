import React from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const AmtRemain = ({value,remainValue}) => {
  return (
    <>
      <FloatingLabel label = 'Amount Remaining' className="mb-3" >
        {remainValue > 0 ?
          <Form.Control type='number' value={remainValue} style={{fontSize : '30px', boxSizing : 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', borderRadius : '15px'}} />
         : 
         <Form.Control type='number' value={value} style={{fontSize : '30px', boxSizing : 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', borderRadius : '15px'}} />}
        
      </FloatingLabel>
    </>
  )
}

export default AmtRemain
