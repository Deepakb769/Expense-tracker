import { useState } from 'react'
import { Table } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const ExpenseRecord = ({datas, setExpenses}) => {
  

  const handleDeleteClick = (index) => {
    setExpenses((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
    <div className="table-container" style={{padding : '2rem 7rem'}}>
    <Table striped bordered hover size='sm'>
        <thead>
            <tr>
                <th>Sr.No</th>  
                <th>Expenses</th>
                <th>Amount</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {datas.length > 0 ? (
            datas.map((data,index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.amount}</td>
                {/* <td>{data.category}</td> */}
                <td className="d-flex">
                  {/* <Button variant="secondary" style={{margin : '0 3rem 0 1rem', padding : '0 1.3rem'}}>Edit</Button> */}
                  <Button variant="secondary" style={{margin : '0 3rem 0 0'}} onClick={() => handleDeleteClick(index)}>Delete</Button>
                  {/* <Button variant="secondary" style={{margin : '0 3rem 0 0'}}>Edit</Button> */}
                </td>
              </tr>
            )))
          :(
            <h1 style={{textAlign : 'center', marginTop : '30px'}}>No Record Yet</h1>
          )}
        </tbody>
      </Table>
    </div>
      
    </>
  )
}

export default ExpenseRecord
