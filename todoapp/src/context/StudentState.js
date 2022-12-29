import React, { useState } from 'react'
import StudentContext from './StudentContext'

const StudentState = (props) => {
    const[student,setStudent]=useState({name:'aniket',age:26,subject:'react',marks:89})
    const[employee,setEmployee]=useState({name:'ani',age:26,designation:'software',salary:89000})
    const hello=()=>{
        setTimeout(()=>{
            setStudent({name:'agrawal',age:26,subject:'react',marks:89})
            setEmployee({name:'aniagr',age:26,designation:'software',salary:89000})
        },2000)
    }
  return (
    <StudentContext.Provider value={{student,employee,hello}}>
        {props.children}
    </StudentContext.Provider>
  )
}

export default StudentState