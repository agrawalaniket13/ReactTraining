// import React, { useReducer, useState } from 'react'
// import { Button, Container } from 'reactstrap'
// const Counter = () => {

//     function reducer(count, action) {
//         switch (action.type) {
//             case 'increment':
//                 return { acount: count.acount + 1 }
//             case 'decrement':
//                 return { acount: count.acount - 1 }
//             case 'reset':
//                 return{acount:0}
//             default:
//                 return count  
//         }
//     }
//     const [count, dispatch] = useReducer(reducer, { acount: 0 })
//     const incrementCount = () => { dispatch({ type: 'increment' }) }
//     const decrementCount = () => { dispatch({ type: 'decrement' }) }
//     const resetCount = () => { dispatch({ type: 'reset' }) }
//     return (
//         <Container>
//             <Button color="danger" onClick={decrementCount}>-</Button>
//             {count.acount}
//             <Button color="warning" onClick={incrementCount}>+</Button><br />
//             <Button color="primary" onClick={resetCount}>Reset</Button>
//         </Container>
//     )
// }
// export default Counter
import React, { useState } from 'react'
import { Button, Container } from 'reactstrap'

const Counter = () => {
    const[count,setCount]=useState(0)
    function increment()
    {
        setCount(count+1)
    }
    function decrement()
    {
        setCount(count-1)
    }

  return (
    <Container>
        <Button color='primary' onClick={increment}>Increment</Button>
            {count}
        <Button color='primary' onClick={decrement}>Decrement</Button>
    </Container>
  )
}

export default Counter