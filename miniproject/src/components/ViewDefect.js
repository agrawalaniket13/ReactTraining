import React, { useEffect, useState } from 'react'
import { Container, Table  , Button} from 'reactstrap'
import { Link } from 'react-router-dom'

const ViewDefect = () => {
    const[viewDefect,setView]=useState([])

    const fetchDefect = async () => {
        const data = await fetch("http://localhost:5000/defect");
        const parsedData = await data.json()
        setView(parsedData)
    }

    const deleteDefect=async(id)=>{
        const data=await fetch(`http://localhost:5000/defect/${id}`,{method:'delete'})
        const response= await data.json();
        console.log(response)
        fetchDefect();
    }

    useEffect(()=>{
        fetchDefect()
    },[])

  return (
    <Container>
        <h3 style={{marginTop:"10px"}}>View Defect</h3>
        {/* <Button color='primary'><Link to="/tracker" style={{color:"white"}}>Back</Link></Button> */}
        <br />
            <Table hover style={{border:"5px"}}>
                <thead style={{backgroundColor:"lightgrey"}}>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                {viewDefect.map((defec) => {
                    return <tr>
                        <td>{defec.description}</td>
                        <td>{defec.priority}</td>
                        <td>{defec.category}</td>
                        <td>{defec.stats}</td>
                        {/* <td><Button color="success">Update</Button></td> */}
                        <td><Button color="danger" onClick={()=>deleteDefect(defec.id)}>Delete</Button></td>
                    </tr>
                })}
                </tbody>
            </Table>
    </Container>
  )
}

export default ViewDefect