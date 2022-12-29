import React, { useReducer } from 'react'
import { Button, Container } from 'reactstrap'

const CounterReducer = () => {
    function reducer(count,action){
        switch(action.type){
            case 'increment':
                return {acount:count.acount+1}
            case 'decrement':
                return{acount:count.acount-1}
            case 'reset':
                return{acount:0}
        }
    }
    const[count,dispatch]=useReducer(reducer,{acount:0})
    const incrementCo=(()=>{dispatch({type:'increment'})})
    const decrementCo=(()=>{dispatch({type:'decrement'})})
    const resetCo=(()=>{dispatch({type:'reset'})})
  return (
    <Container>
        <Button color='primary' onClick={incrementCo}>Increment</Button>
            {count.acount}
        <Button color='primary' onClick={decrementCo}>Decrement</Button>
        <br />
        <Button color='success' onClick={resetCo}>Reset</Button>
    </Container>
  )
}

export default CounterReducer