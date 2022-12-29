import React from 'react'
import { Form, FormGroup , Label } from 'reactstrap'

const Filter = (props) => {
    function filterValue(e){
        // console.log(e.target.value);
        props.filterValueSelected(e.target.value)
    }
  return (
    <div className="container">
        <Form>
            <FormGroup>
            <Label for="priority">Priority</Label>
            <select name="filterdata" id="" onChange={filterValue}>
                <option>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            </FormGroup>
        </Form>
    </div>
  )
}

export default Filter