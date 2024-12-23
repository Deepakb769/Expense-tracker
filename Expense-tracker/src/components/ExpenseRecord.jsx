import React from 'react'
import { Table } from 'react-bootstrap'

const ExpenseRecord = () => {
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
        <h3 style={{textAlign : 'center', marginTop : '30px'}}>No Record Yet</h3>
        {/* <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        </tbody> */}
      </Table>
    </>
  )
}

export default ExpenseRecord
