import React, { useState } from 'react'
import { InputGroup, ToastContainer, Toast, Form, Button } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { LuPizza } from "react-icons/lu";
import { CiShoppingBasket } from "react-icons/ci";
import { BsSuitcase2 } from "react-icons/bs";
import { LuShieldPlus } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";


const Catagories = ({handleAddBudget, handleAddExpenses}) => {
  const [showFormA, setShowFormA] = useState(false);
  const [showFormB, setShowFormB] = useState(false);
  const [budgetValue, setBudgetValue] = useState('')
  const [expensesValue, setExpensesValue] = useState('');
  

  const budgetForm = () => {
    setShowFormA(!showFormA);
  }

  const expenseForm = () =>{
    setShowFormB(!showFormB);
  }

  const handleBudgetSubmit = () =>{
    handleAddBudget(budgetValue); // passing the budget value to the parent component
    setShowFormA(false);
    setBudgetValue('');
  }
  
  const handleExpenseSubmit = () => {
    handleAddExpenses(expensesValue);
    setShowFormB(false)
    setExpensesValue('')
  }

  return (
    <>
      <div className='catagory' style={{display : 'flex', alignItems : 'center', justifyContent : 'space-evenly', marginBottom : '15px'}}>
        <InputGroup style={{width : '10rem', borderRadius : '10px'}}>
          <InputGroup.Text id="basic-addon1"><BsSearch /></InputGroup.Text>
            <Form.Control 
              placeholder='Search'
              aria-label='search'
            />
        </InputGroup>
        <span style={{padding : '10px', margin : '10px', borderRadius : '15px', cursor : 'pointer', backgroundColor : '#bfb6b6'}}><LuPizza /> Food & Drinks</span> 
        <span style={{padding : '10px', margin : '10px', borderRadius : '15px', cursor : 'pointer', backgroundColor : '#bfb6b6'}}><CiShoppingBasket /> Groceries</span>
        <span style={{padding : '10px', margin : '10px', borderRadius : '15px', cursor : 'pointer', backgroundColor : '#bfb6b6'}}><BsSuitcase2 /> Travel</span>
        <span style={{padding : '10px', margin : '10px', borderRadius : '15px', cursor : 'pointer', backgroundColor : '#bfb6b6'}}><LuShieldPlus /> Health</span>
        <span style={{padding : '10px', margin : '10px', borderRadius : '15px', color : 'white', backgroundColor : 'blue', cursor : 'pointer'}} onClick={budgetForm}><IoMdAdd /> Add Budget</span>
        <span style={{padding : '10px', margin : '10px', borderRadius : '15px', color : 'white', backgroundColor : 'blue', cursor : 'pointer'}} onClick={expenseForm}><IoMdAdd /> Add Expenses</span>

        {showFormA && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999, display: 'block'
          }}></div>
        )}

        <ToastContainer position='center' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}}>
          <Toast show={showFormA} onClose={budgetForm}>
            <Toast.Header>
              <strong className='me-auto'>Add Budget Amount</strong>
            </Toast.Header>
            <Toast.Body style={{textAlign : 'center'}}>
              <Form.Label>Add Amount</Form.Label>
              <Form.Control 
                type='number'
                placeholder='Amount'
                aria-describedby='Numbers'
                value = {budgetValue}
                onChange={(event) => setBudgetValue(event.target.value)}
              />
              <Button variant='primary' onClick={handleBudgetSubmit}>Add Budget</Button>
            </Toast.Body>
          </Toast>
        </ToastContainer>

        {showFormB  && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999, display: 'block'
          }}></div>
        )}

        {/* for expense */}
        <ToastContainer position='center' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}}>
          <Toast show={showFormB} onClose={expenseForm}>
            <Toast.Header>
              <strong className='me-auto'>Add Expense Detail</strong>
            </Toast.Header>
            <Toast.Body style={{textAlign : 'center'}}>
              <Form>
                <Form.Group  controlId='formGroup' value={expensesValue} >
                  <Form.Label>Sr.No</Form.Label>
                  <Form.Control type='number' placeholder='1' readOnly={1} />
                  <Form.Label>Expense Name</Form.Label>
                  <Form.Control type='name' placeholder='Expense Name' />
                  <Form.Label>Date</Form.Label>
                  <Form.Control type='date' />
                  <Form.Label>Selected Category</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select Options</option>
                    <option value="1">Food & Drinks</option>
                    <option value="2">Groceries</option>
                    <option value="3">Travel</option>
                    <option value="4">Health</option>
                  </Form.Select>
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type='number' value={expensesValue} placeholder='Amount' onChange={(event) => setExpensesValue(event.target.value)}/>
                </Form.Group>
              </Form>
              <Button variant='primary' onClick={handleExpenseSubmit}>Add Expense</Button>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  )
}

export default Catagories
