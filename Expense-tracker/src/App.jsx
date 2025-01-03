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
import UseMemoExam from './components/useMemoExam'
import GraphChart from './components/GraphChart'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const root = document.getElementById("root")
  const [budget, setBudget] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [filteredRecords, setFilteredRecords] = useState([])

  const handleAddBudget = (para) => {
    setBudget(para)
  };

  //const handleAddExpenses = (show) => {
  //  setExpenses(show)
  //}

  const handleFormSubmit = (data) => {
    setExpenses((prevExpenses) => [...prevExpenses, data])

  }

  // const filterByCategory = (category) => {
  //   if(category){
  //     const filtered = expenses.filter((record) => record.category === category);
  //     console.log(filtered)
  //     setFilteredRecords(filtered);
  //   } else {
  //     setFilteredRecords(expenses);
  //   }
  // }

  const filterByCategory = (category) => {
    if (category) {
      const filtered = expenses.map((record) => {
        if (record.category === category) {
          return record
        } else {
          return 'No category assigned'
        }
      })
      console.log(filtered);
      setFilteredRecords(filtered);
    }
    else {
      setFilteredRecords(expenses);
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Greeting />
          <BudgetCal para={budget} show={expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0)} />
          <Catagories handleAddBudget={handleAddBudget} onSubmit={handleFormSubmit} filterByCategory={filterByCategory} />
          <ExpenseRecord datas={filteredRecords.length > 0 ? filteredRecords : expenses} />
          <GraphChart />
        </>
      )
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
