import { useEffect, useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Header from './components/Header'
import Greeting from './components/Greeting'
import Catagories from './components/Catagories'
import BudgetCal from './components/BudgetCal'
// import ExpenseRecord from './components/ExpenseRecord'
import ExpenseRecord from './components/ExpenseRecord'
import GraphChart from './components/GraphChart'

function App() {
  const [budget, setBudget] = useState(0)
  const [expenses, setExpenses] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([])
  // const [selectedExpense, setSelectedExpense] = useState(null)

  const handleAddBudget = (para) => {
    setBudget(para)
  };

  const handleFormSubmit = (data) => {
    setExpenses((prevExpenses) => [...prevExpenses, data])

  }

  const handleSearchCategory = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredRecords(expenses)
    }
    else {
      const searchFiltered = expenses.filter((record) => record.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredRecords(searchFiltered)
    }
  }

  const filterByCategory = (category) => {
    if (category === 'All Expenses') {
      setFilteredRecords(expenses)
    }
    else {
      const filtered = expenses.filter((record) => record.category === category);
      if (filtered.length > 0) {
        setFilteredRecords(filtered);
      } else {

        setFilteredRecords([]);
      }
    }
  }

  useEffect(() => {
    setFilteredRecords(expenses);
  },[expenses])




  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Greeting />
          <BudgetCal para={budget} show={expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0)} />
          <Catagories handleAddBudget={handleAddBudget} onSubmit={handleFormSubmit} filterByCategory={filterByCategory} handleSearchCategory={handleSearchCategory} />
          <GraphChart graphs={filteredRecords.length > 0 ? filteredRecords : 0} expenses={expenses} />
          {filteredRecords.length === 0}
          <ExpenseRecord datas={filteredRecords.length > 0 ? filteredRecords : []} setExpenses={setExpenses} /> {filteredRecords.length === 0}
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
