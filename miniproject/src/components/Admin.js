import React, { useEffect, useState } from 'react'
import {Form , FormGroup , Label , Input , Button,Table}  from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate=useNavigate()
  const[viewDefect,setView]=useState([])
  const [defectCount, setDefectCount] = useState(0);
  const [filterDefect, setFilterDefect] = useState([]);
  
  const fetchDefect = async () => {
    const data = await fetch("http://localhost:5000/defect");
    const parsedData = await data.json()
    setView(parsedData)
}

// const fetchDefects=async(id)=>{
//   const data=await fetch(`http://localhost:5000/defect/${id}`)
//   const response= await data.json();
//   console.log(response)
//   navigate("/updatestatus", {state:{defec:response}})
// }

const fetchDefects=async(viewDefect)=>{
  const requestOptions = {
    method: "PATCH",
    body: JSON.stringify({
      stats: false
    }),
    "headers": { "Content-type": "application/json" }
}
const data = await fetch(`http://localhost:5000/defect/${viewDefect.id}`, requestOptions)
const response = await data.json();
console.log(response)
}


const priorityChange = (e) => {
  console.log(e.target.value)
  let serviceDefect = []
  let count = 0
  if (e.target.value === "All") {
      console.log(e.target.value)
      viewDefect.map((d) => {
          count = count + 1
          serviceDefect.push(d)
      })
  }
  else {
    viewDefect.map((d) => {
          if (d.priority === e.target.value) {
              console.log(e.target.value)
              count = count + 1
              serviceDefect.push(d)
          }
      })
  }
  console.log(serviceDefect)
  setFilterDefect(serviceDefect)
  setDefectCount(count)
}

useEffect(()=>{
  fetchDefect()
},[])

  return (
    <div className="container">
      <h2 style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>Defect Tracker</h2>
      <h4 style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>Filter Details</h4>
      {/* <Filter filterValueSelected={onFilter}></Filter> */}
      <Form style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
        <FormGroup>
          <Label for="priority">Priority</Label>
          <select name="" id="" onChange={(e) => priorityChange(e)}>
            <option>All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </FormGroup>
        <p></p>
        <FormGroup>
          <Label for="description">Category</Label>
          <select name="" id="">
            <option value="">Select</option>
            <option value="">UI</option>
            <option value="">Functional</option>
            <option value="">Change Request</option>
          </select>
        </FormGroup>
      </Form>
      <Table hover style={{border:"2px solid black",marginTop:"10px"}}>
        <thead style={{backgroundColor:"lightgrey"}}>
          <th>Defect Category</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Change Status</th>
        </thead>
        <tbody>
          {viewDefect.map((defec) => {
            return <tr>
              <td>{defec.category}</td>
              <td>{defec.description}</td>
              <td>{defec.priority}</td>
              {/* <td>{defec.stats}</td> */}
              <td>{defec.stats ? 'open' : 'close'}</td>
              <td>{defec.stats?<Button color="success" onClick={()=>fetchDefects(defec)}>Close</Button>:<p>No pending</p>}</td>
              {/* <td><Link to="/admin">Open</Link></td>
              <td><Link to="/admin">Close Defect</Link></td> */}
              {/* <td><Button color="success" onClick={()=>fetchDefects(defec.id)}>Open</Button></td> */}
              {/* <td><Button color="danger">Close</Button></td> */}
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Admin