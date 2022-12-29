import React from 'react'
import { Link } from 'react-router-dom'
import {Button}  from 'reactstrap'

const Tracker = () => {
  return (
    <div className='container'>
      <h3 >Defect Tracker</h3>
      <Button color='primary'><Link to="/user" style={{color:"white"}}>Add Defect</Link></Button>
      {' '}
      <Button color='primary'><Link to="/viewdef" style={{color:"white"}}>View Defect</Link></Button>
    </div>
  )
}
export default Tracker