import React from 'react'
import { Toast } from 'react-bootstrap'

const ToastExampe = () => {
  return (
    <>
      <Toast>
        <Toast.Header>
            <strong className='me-auto'>Bootstrap</strong>
            <small>Just now</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </>
  )
}

export default ToastExampe
