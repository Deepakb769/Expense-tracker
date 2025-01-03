import React from 'react'

const filterCategory = () => {

  const originalArray = [
    { id: 1, category: "A", value: "Item 1" },
    { id: 2, category: "B", value: "Item 2" },
    { id: 3, category: "A", value: "Item 3" },
    { id: 4, category: "C", value: "Item 4" },
    { id: 5, category: "B", value: "Item 5" },
    { id: 6, category: "C", value: "Item 6" },
  ];
  
    const groupedArrays = orignalArray.reduce((acc, item) => {  // Reduce the original array to a single object
        const { category } = item ; // Destructure the category from the item

        if (!acc[category]){
            acc[category] = [];
        } // If the category doesn't exist in the accumulator, create it

        acc[category].push(item) // Push the item to the category array

        return acc;
    },
    {} // Initial value of the accumulator
    )
  return (
    <div>
      
    </div>
  )
}

export default filterCategory
