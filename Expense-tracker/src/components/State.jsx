import React, { useState } from 'react'

const State = () => {
    const [car, setCar] = useState({
        name : "Ford",
        model : "Mustang",
        year : "1964",
        color : "red"
    })

    const handleUpdate = () => {
        setCar(previousState => {
            return{...previousState, name : "Mercedez", model : "Benz"}
        });
    }

  return (
    <>
      <h1>This is {car.name} {car.model}</h1>
      <button type="submit" onClick={handleUpdate}>Change</button>
    </>
  )
}

export default State
