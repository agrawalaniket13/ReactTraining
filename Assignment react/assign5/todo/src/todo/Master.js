import React, { useContext, useEffect } from 'react'
import StudentContext from '../context/StudentContext'

const Master = () => {
    const a=useContext(StudentContext)
    useEffect(()=>{
        a.hello()
    },[])
  return (
    <div>
        <p>the name of student is {a.student.name}</p>
        <p>the name of student is {a.employee.name}</p>
        {a.hello()}
    </div>
  )
}

export default Master