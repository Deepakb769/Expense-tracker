import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Toast } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { ToastContainer } from 'react-bootstrap'
import { toast } from 'react-toastify'

const ExpenseRecord = ({ datas, setExpenses }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [showEdit, setShowEdit] = useState(false)

  const handleDeleteClick = (index) => {
    setExpenses((prev) => prev.filter((_,i) => i !== index));
  }



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  }


  const handleEditClick = (index) => {
      setEditingIndex(index);
      setEditData(datas[index]);
      setShowEdit(true);
  }

  const handleSaveChange = () => {
    
    const amount = parseFloat(editData.amount);
    
    if(isNaN(amount) || amount <= 0){
      toast.error("Only positive numbers");
      return;
    }

    setExpenses((prev) =>
      prev.map((item, index) =>
        index === editingIndex ? editData : item
      )
    )
    setEditingIndex(null);
    setEditData({});
    setShowEdit(false);
  }

  const handleCancelClick = () => {
    setShowEdit(false);
    setEditingIndex(null);
    setEditData({});
  }

  return (
    <>
      <div className="table-container" style={{ padding: '2rem 7rem' }}>
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
              datas.map((data, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{data.name}</td>
                  <td>{data.amount}</td>
                  {/* <td>{data.category}</td> */}
                  <td className="d-flex">
                    <Button variant="secondary" style={{ margin: '0 3rem 0 1rem', padding: '0 1.3rem' }} onClick={() => handleEditClick(index)}>Edit</Button>
                    {/* <Button variant="secondary" style={{margin : '0 3rem 0 0'}} onClick={() => handleDeleteClick(expense.srNo)}>Delete</Button> */}
                    <Button
                      variant="secondary"
                      style={{ margin: '0 3rem 0 0' }}
                      onClick={() => handleDeleteClick(index)}
                    >
                      Delete
                    </Button>

                  </td>
                </tr>
              )))
              : (
                <h1 style={{ textAlign: 'center', marginTop: '30px' }}>No Record Yet</h1>
              )}
          </tbody>
        </Table>


        {showEdit && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}></div>
        )}

        <ToastContainer position='top-end' style={{ width: '400px', marginTop: '30%', marginRight: '32%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
          <Toast show={showEdit} onClose={handleCancelClick} >
            <Toast.Header>
              <strong className='me-auto'>Edit Form</strong>
            </Toast.Header>
            <Toast.Body style={{ textAlign: 'center' }}>
              <Form>
                <Form.Group controlId='formGroup'>
                  <Form.Label style={{ marginTop: '1rem' }}>Expense Name</Form.Label>
                  <Form.Control type='text' name='name' placeholder='Expense name' value={editData.name || ''} onChange={handleInputChange}></Form.Control>
                  <Form.Label style={{ marginTop: '1rem' }}>Date</Form.Label>
                  <Form.Control type='date' name='date' value={editData.date || ''} onChange={handleInputChange}></Form.Control>
                  <Form.Label style={{ marginTop: '1rem' }}>Category</Form.Label>
                  <Form.Select type='text' name='category' placeholder='Expense name' value={editData.category || ''} onChange={handleInputChange}>
                  <option>Select Options</option>
                    <option value="Food & Drinks">Food & Drinks</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Travel">Travel</option>
                    <option value="Health">Health</option>
                  </Form.Select>
                  <Form.Label style={{ marginTop: '1rem' }}>Amount</Form.Label>
                  <Form.Control type='number' name='amount' placeholder='Amount' value={editData.amount || ''} onChange={handleInputChange}></Form.Control>
                  
                    <Button variant="success" onClick={handleSaveChange} style={{ marginRight: '10px' }}>Save</Button>
                    <Button variant="danger" onClick={handleCancelClick}>Cancel</Button>
                </Form.Group>
              </Form>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>

    </>
  )
}

export default ExpenseRecord