import React from 'react'
import { Table } from 'react-bootstrap'

const ExpenseRecord = ({datas}) => {
  return (
    <>
      <Table striped bordered hover size='sm'>
        <thead>
            <tr>
                <th>Sr.No</th>  
                <th>Expenses</th>
                <th>Amount</th>
                <th>Edit/Delete</th>
            </tr>
        </thead>
        <tbody>
          {datas.length > 0 ? (
            datas.map((data , index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.amount}</td>
                <td>{data.category}</td>
              </tr>
            )))
          :(
            <h1 style={{textAlign : 'center', marginTop : '30px'}}>No Record Yet</h1>
          )}
        </tbody>
        
        
      </Table>
    </>
  )
}

export default ExpenseRecord
