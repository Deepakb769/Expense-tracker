import React from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FaIndianRupeeSign } from "react-icons/fa6";
import Remain from "../assets/Coins.svg";

const AmtRemain = ({para, remainValue}) => {
  return (
    <>
      {/* <FloatingLabel label="Remaining Amount"
          className="mb-0"
          style={{ width: '80%' }}> */}
        {remainValue > 0 ? (
          <span className="pen-label" style={{
            display: 'flex',
          alignItems: 'center', // Vertically align items
          justifyContent: 'space-between', // Space items evenly
          padding: '10px', // Add padding for equal spacing
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          borderRadius: '30px',
          width: '370px',
          backgroundColor: '#fff', // Optional for better visibility
                 }}>
        <FloatingLabel label="Remaining Amount"
        className="mb-0"
        style={{ width: '80%', 
          fontWeight: '200',
          fontSize: '18px',
         }}>
          
          {/* <span className="pen-label" style={{
            display: 'flex',
          alignItems: 'center', // Vertically align items
          justifyContent: 'space-between', // Space items evenly
          padding: '20px', // Add padding for equal spacing
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          borderRadius: '30px',
          width: '450px',
          backgroundColor: '#fff', // Optional for better visibility
                 }}> */}
            <FaIndianRupeeSign style={{margin : '0 0 8px 10px'}}/>
            <Form.Control value={remainValue}
            readOnly
            style={{
              fontSize: '30px',
              border: 'none',
              boxShadow: 'none',
              display: 'inline-block',
              width: '50%',
              paddingTop: '2.2rem',
              paddingLeft: '3px',
            }} />
          </FloatingLabel>
          <img src={Remain} alt="" style={{ height: '50px',
           width: '55px',  
           margin: '0 21px', 
        }} />
          </span>
        ) 
         : 
        (
          <span className="pen-label"  style={{display: 'flex',
            alignItems: 'center', // Vertically align items
            justifyContent: 'space-between', // Space items evenly
            padding: '10px', // Add padding for equal spacing
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            borderRadius: '30px',
            width: '370px',
            backgroundColor: '#fff',}}>

          <FloatingLabel 
          label="Remaining Amount"
          className="mb-0"
          style={{ fontWeight: '200',
            fontSize: '18px',
          }}
          >

          
          <FaIndianRupeeSign style={{margin : '0 0 8px 10px'}} />
          <Form.Control value={para}
            readOnly
            style={{
              fontSize: '30px',
              border: 'none',
              // boxShadow: 'none',
              display: 'inline-block',
              width: '50%',
              paddingTop: '2.2rem',
              paddingLeft: '3px',
            }} />
          {/* </FloatingLabel> */}
        </FloatingLabel>
        <img src={Remain} alt="" style={{ height: '50px',
           width: '55px',  
           margin: '0 21px', 
        }} />
        </span>
        )
      }
      {/* </FloatingLabel>  */}
    </>
  )
}

export default AmtRemain
