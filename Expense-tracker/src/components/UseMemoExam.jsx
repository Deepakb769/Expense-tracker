import { useMemo } from "react";

const UseMemoExam = ({ data }) => {
    // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => {
    // Perform the expensive computation here
    return processData(data);
  }, [data]); // 'data' is a dependency

  return (
    <div>
      {/* Render the memoized value */}
      <p>{memoizedValue}</p>
    </div>
  );
//     const processedItems = processItems(items); // Expensive computation
  
//     return (
//       <ul>
//         {processedItems.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     );
//   };
  
//   const processItems = (items) => {
//     // Expensive computation
//     // Imagine some heavy processing here
//     return items.map(item => ({ id: item.id, name: item.name.toUpperCase() }));
  };
  
//     const [number, setNumber] = useState(0);
//     // Using useMemo
//     const squaredNum = useMemo(() => {
//         return squareNum(number);
//     }, [number]);
//     const [counter, setCounter] = useState(0);

//     // Change the state to the input
//     const onChangeHandler = (e) => {
//         setNumber(e.target.value);
//     };

//     // Increases the counter by 1
//     const counterHander = () => {
//         setCounter(counter + 1);
//     };
//     return (
//         <div className="UseMoemoExam">
//             <h1>Welcome to Geeksforgeeks</h1>
//             <input
//                 type="number"
//                 placeholder="Enter a number"
//                 value={number}
//                 onChange={onChangeHandler}>
//             </input>

//             <div>OUTPUT: {squaredNum}</div>
//             <button onClick={counterHander}>
//                 Counter ++
//             </button>
//             <div>Counter : {counter}</div>
//         </div>
//     );
// }

// // Function to square the value
// function squareNum(number) {
//     console.log("Squaring will be done!");
//     return Math.pow(number, 2);


//}

// const processItems = (items) => {
//     return items.map(item => (
//         {
//             id : item.id,
//             name : item.name.toUpperCase()
//         }
//     ))
// }

export default UseMemoExam;