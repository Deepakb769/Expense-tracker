import React, { useState } from 'react'
import { InputGroup, ToastContainer, Toast, Form, Button, Alert } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { LuPizza } from "react-icons/lu";
import { CiShoppingBasket } from "react-icons/ci";
import { BsSuitcase2 } from "react-icons/bs";
import { LuShieldPlus } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { toast } from 'react-toastify';



const Catagories = ({handleAddBudget, onSubmit, filterByCategory, handleSearchCategory}) => {
  const [showFormA, setShowFormA] = useState(false);
  const [showFormB, setShowFormB] = useState(false);
  const [budgetValue, setBudgetValue] = useState('')
  const [expensesValue, setExpenseValue] = useState('');
  const [id, setId] = useState(1);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [onSearch, setOnSearch] = useState('')

  const budgetForm = () => {
    setShowFormA(!showFormA);
  }

  const expenseForm = () =>{
    setShowFormB(!showFormB);
  }

  const today = new Date().toISOString().split('T')[0]; // get today's date

  const handleBudgetSubmit = (e) =>{
    e.preventDefault();
    if(budgetValue === '' || budgetValue === 0){
      toast.error('Please enter the budget amount');
      return;
    }
    handleAddBudget(budgetValue); // passing the budget value to the parent component
    setShowFormA(false);
    setBudgetValue('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (parseFloat(budgetValue) <= 0) {
    //   toast.error('Please set a valid budget before adding expenses');
    //   return;
    // }
    if(!name.trim() || !date.trim() || !category.trim() || !expensesValue.trim()){
      toast.error('Please fill all the fields');
      return;
   }
   else {
    const expenseData = {
      id,
      name,
      date,
      category,
      amount : expensesValue
    }
    
    onSubmit(expenseData);
    setId(id + 1);
    setName('');
    setDate('');
    setCategory('');
    setExpenseValue('');

    setShowFormB(!showFormB);
  }
}

// const filterExpenses = expenses.filter((expenses) => expenses.name.includes(onSearch))


  return (
    <>
      <div className='catagory' style={{display : 'flex', alignItems : 'center', fontWeight : '200', justifyContent : 'space-evenly', gap : '10px', margin: '40px 6.1rem'}}>
        <InputGroup style={{width : '10rem', borderRadius : '10px'}}>
          <InputGroup.Text id="basic-addon1"><BsSearch /></InputGroup.Text>
            <Form.Control 
              placeholder='Search'
              aria-label='search'
              value={onSearch}
              onChange={(e) => {
                setOnSearch(e.target.value); // Update search state
                handleSearchCategory(e.target.value);
              }}
            />
        </InputGroup>
        <span style={{padding : '10px 20px',  borderRadius : '25px', cursor : 'pointer', backgroundColor : '#F5F5F5'}} onClick={() => filterByCategory("All Expenses")} ><FaRegListAlt /> All Expenses</span> 
        <span style={{padding : '10px 20px',  borderRadius : '25px', cursor : 'pointer', backgroundColor : '#F5F5F5'}} onClick={() => filterByCategory("Food & Drinks")} ><LuPizza /> Food & Drinks</span> 
        <span style={{padding : '10px 20px',  borderRadius : '25px', cursor : 'pointer', backgroundColor : '#F5F5F5'}} onClick={() => filterByCategory("Groceries")} ><CiShoppingBasket /> Groceries</span>
        <span style={{padding : '10px 20px',  borderRadius : '25px', cursor : 'pointer', backgroundColor : '#F5F5F5'}} onClick={() => filterByCategory("Travel")} ><BsSuitcase2 /> Travel</span>
        <span style={{padding : '10px 20px',  borderRadius : '25px', cursor : 'pointer', backgroundColor : '#F5F5F5'}} onClick={() => filterByCategory("Health")}><LuShieldPlus /> Health</span>
        <span style={{padding : '10px 20px',  borderRadius : '15px', color : 'white', backgroundColor : '#5C6AFF', cursor : 'pointer'}} onClick={budgetForm}><IoMdAdd /> Budget</span>
        <span style={{padding : '10px 20px',  borderRadius : '15px', color : 'white', backgroundColor : '#5C6AFF', cursor : 'pointer'}} onClick={expenseForm}><IoMdAdd /> Expenses</span>

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
              <form onSubmit={handleBudgetSubmit}>
              <Form.Label>Add Amount</Form.Label>
              <Form.Control 
                type='number'
                placeholder='Amount'
                aria-describedby='Numbers'
                value = {budgetValue}
                onChange={(event) => setBudgetValue(event.target.value)}
              />
              <Button variant='primary' style={{marginTop : '1rem'}}>Add Budget</Button>
              </form>
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
              <Form onSubmit={handleSubmit} >
                <Form.Group  controlId='formGroup' value={expensesValue}>
                  <Form.Label style={{marginTop : '1rem'}}>Sr.No</Form.Label>
                  <Form.Control type='number' placeholder='1' value={id} onChange={(event) => setId(event.target.value)}/>
                  <Form.Label style={{marginTop : '1rem'}}>Expense Name</Form.Label>
                  <Form.Control type='name' placeholder='Expense Name' value={name} onChange={(event) => setName(event.target.value)}/>
                  <Form.Label style={{marginTop : '1rem'}}>Date</Form.Label>
                  <Form.Control type='date' value={date} onChange={(event) => setDate(event.target.value)} max={today} />
                  <Form.Label style={{marginTop : '1rem'}}>Selected Category</Form.Label>
                  <Form.Select 
                    name='category'
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    <option>Select Options</option>
                    <option value="Food & Drinks">Food & Drinks</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Travel">Travel</option>
                    <option value="Health">Health</option>
                  </Form.Select>
                  <Form.Label style={{marginTop : '1rem'}}>Amount</Form.Label>
                  <Form.Control type='number'  placeholder='Amount' onChange={(event) => setExpenseValue(event.target.value)} />
                </Form.Group>
                <Button variant='primary' type='submit' style={{margin : '1rem'}} >Add Expense</Button>
              </Form>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  )
}

   {/* Budget and Expense Toast Modals */}


export default Catagories
