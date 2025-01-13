import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Header from './components/Header'
import Greeting from './components/Greeting'
import Catagories from './components/Catagories'
import BudgetCal from './components/BudgetCal'
import ExpenseRecord from './components/ExpenseRecord'
import GraphChart from './components/GraphChart'

function App() {
  const [budget, setBudget] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [filteredRecords, setFilteredRecords] = useState([])

  const handleAddBudget = (para) => {
    setBudget(para)
  };

  const handleFormSubmit = (data) => {
    setExpenses((prevExpenses) => [...prevExpenses, data])

  }

  const handleSearchCategory = (e) => {
    if(!onSearch){
      setFilteredRecords(expenses)
    }
    else{
      const searchFiltered = expenses.filter((record) => record.name.includes(onSearch))
    }
    setFilteredRecords(searchFiltered)
  }

const filterByCategory = (category) => {
  if (!category || category  === 'All Expenses') {
    setFilteredRecords(expenses);
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


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Greeting />
        <BudgetCal para={budget} show={expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0)} />
        <Catagories handleAddBudget={handleAddBudget} onSubmit={handleFormSubmit} filterByCategory={filterByCategory} />
        <GraphChart graphs={filteredRecords.length > 0 ? filteredRecords : 0 } expenses={expenses}/>
        {filteredRecords.length === 0} 
        <ExpenseRecord datas={filteredRecords.length > 0 ? filteredRecords : <h1>No expenses</h1> } setExpenses={setExpenses} /> {filteredRecords.length === 0} 
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
