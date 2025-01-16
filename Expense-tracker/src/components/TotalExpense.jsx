import React from 'react'
import { Card } from 'react-bootstrap'
import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Line from '../assets/Line.png'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { toast } from 'react-toastify'

const TotalExpense = ({show, budgetSet, onAttemptToEdit}) => {

  const isDisabled = budgetSet <= 0;

  const handleInputClick = () => {
    if (isDisabled && onAttemptToEdit) {
      onAttemptToEdit();
    }
  };
  
  return (
    <>
      {/* <FloatingLabel label = "Total Expense" className="mb-3" style={{ borderRadius : '35px'}}>
        <Form.Control value={show} style={{fontSize : '30px'}} />
      </FloatingLabel>  */}
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
      <FloatingLabel 
        label="Total Expenses"
        className="mb-0" 
        style={{ fontSize: '18px',
          fontWeight : 200 }} 
      >
        <FaIndianRupeeSign style={{margin : '0 0 8px 10px'}} />
        <Form.Control 
          value={show} 
          // disabled={isDisabled}
          readOnly = {!budgetSet}
          // placeholder={isDisabled ? "Set budget first" : ""}
          // onClick={handleInputClick}
          style={{  
            fontSize : '30px',
            border : 'hidden', 
            paddingTop : '2.2rem', 
            // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;', 
            display : 'inline-block', 
            width : '50%',
            paddingLeft: '3px',
            }} 
        />
      </FloatingLabel >
      <img src={Line} 
        style={{ height: '50px',
           width: '55px',  
           margin: '0 21px', 
        }}/>
      </span>
      {/* {!budgetSet && (
        toast.error("Please enter a budget value")
      )} */}
    </>
  )
}

export default TotalExpense
