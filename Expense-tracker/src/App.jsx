import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom'
import Header from './components/Header'
import Greeting from './components/Greeting'
import BudgetSet from './components/BudgetSet'
import TotalExpense from './components/TotalExpense'
import Catagories from './components/Catagories'
import BudgetCal from './components/BudgetCal'
import ExpenseRecord from './components/ExpenseRecord'
import ToastExampe from './components/ToastExampe'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const root = document.getElementById("root")
  const [budget, setBudget] = useState(0)
  const [expenses, setExpenses] = useState(0)

  const handleAddBudget = (value) => {
    setBudget(value)
  };

  const handleAddExpenses = (show) => {
    setExpenses(show)
  }

  const router = createBrowserRouter([
    {
      path : "/",
      element : (
        <>
          <Header />
          <Greeting />
          <BudgetCal value={budget} show={expenses} />
          <Catagories handleAddBudget={handleAddBudget} handleAddExpenses={handleAddExpenses}/>
          <ExpenseRecord />
        </>
      )
    }
  ])

  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
