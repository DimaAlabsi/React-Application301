import React, { Component } from 'react';

import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


 class FormFilter extends Component {
  
    HandleChanges=(e)=>{
this.props.HandleChange(e);
// console.log(this.props);
    }
     
    render() {
        return (
            <>
                <Form  onChange={this.HandleChanges} >
  <Form.Group  className="mb-3" controlId="formBasicEmail" >
    <Form.Label> Filter by Numbers of 'Horns'</Form.Label>
    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
        <option value="0">Choose...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="100">100 </option>

      </Form.Select>
     

      
    
 </Form.Group>
  </Form>
            </>
    );
    }
}
 

export default FormFilter

