import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Button}  from 'reactstrap'

const Tracker = () => {
  const location=useLocation();
  return (
    <div className='container'>
      {/* <h3 >Defect Tracker</h3> */}
      <h3>Hello, {location.state.name} welcome to Defect Tracker</h3>
      <Button color='primary'><Link to="/user" style={{color:"white"}}>Add Defect</Link></Button>
      {' '}
      <Button color='primary'><Link to="/viewdef" style={{color:"white"}}>View Defect</Link></Button>
    </div>
  )
}
export default Tracker