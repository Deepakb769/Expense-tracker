import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Pen from '../assets/Pen.png';
import { FaIndianRupeeSign } from "react-icons/fa6";

const BudgetSet = ({ para }) => {
  return (
    <>
      <div
        className="pen-label"
        style={{
          display: 'flex',
          alignItems: 'center', // Vertically align items
          justifyContent: 'space-between', // Space items evenly
          padding: '10px', // Add padding for equal spacing
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          borderRadius: '30px',
          width: '370px',
          backgroundColor: '#fff', // Optional for better visibility
        }}
      >
        <FloatingLabel
          label="Your Budget"
          className="mb-0"
          style={{ fontSize: '18px',
            fontWeight: '200',
           }}
        >
          <FaIndianRupeeSign style={{margin : '0 0 8px 10px'}}/>
          <Form.Control
            value={para}
            readOnly
            style={{
              fontSize: '30px',
              border : 'hidden', 
              display : 'inline-block',
              // boxShadow: 'none', 
              width : '50%',
              paddingTop : '2.2rem',
              paddingLeft: '3px',
            }}
          />
        </FloatingLabel >
        <img
          src={Pen}
          alt="Edit"
          style={{
            height: '50px',
            width: '55px',
            margin: '0 21px',
          }}
        />
      </div>
    </>
  );
};

export default BudgetSet;
