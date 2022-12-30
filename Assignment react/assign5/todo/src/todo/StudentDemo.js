import React, { useReducer } from 'react'
import { Button, Container } from 'reactstrap'

const StudentDemo = () => {
    function reducer(students,action){
        switch(action.type){
            case 'namecaps':
                return students.map((std)=>{return{...std,name:std.name.toUpperCase()}})
            case 'namelower':
                return students.map((std)=>{return{...std,name:std.name.toLowerCase()}})
            case 'agegre':
                return students.filter((std)=>std.age>25)
            case 'selectage':
                return students.filter((std)=>std.age>25)
            default:
                return students
        }
    }
    const[students,dispatch]=useReducer(reducer,[
        {name:'aniket', age:26},
        {name:'agrawal', age:25},
        {name:'ani', age:27}
    ])
    const changeNameToUpperCase=()=>{dispatch({type:'namecaps'})}
    const changeNameToLowerCase=()=>{dispatch({type:'namelower'})}
    const ageGreater=()=>{dispatch({type:'agegre'})}
    const ageSelect=()=>{dispatch({type:'selectage'})}
  return (
    <Container>
        {students.map((std)=>{
            return <p>{std.name} is {std.age} year old</p>
        })}
        <Button color='primary' onClick={changeNameToUpperCase}>To Upper Case</Button>
        <Button color='primary' onClick={changeNameToLowerCase}>To Lower Case</Button>
        <Button color='primary' onClick={ageGreater}>Greater then</Button>
        <br />
        <br />
        <select onClick={ageSelect}>
            <option value="">select</option>
            <option value="25">25</option>
            <option value="26">26</option>
        </select>
    </Container>
  )
}

export default StudentDemo