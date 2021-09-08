import React, { Component } from 'react';

import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


 class FormFilter extends Component {
  

     
    render() {
        return (
            <>
                <Form >
  <Form.Group  className="mb-3" controlId="formBasicEmail" >
    <Form.Label> Filter by Numbers of Horns</Form.Label>
    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
        <option value="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="100">one hundred</option>

      </Form.Select>
     

      
    
 </Form.Group>
  </Form>
            </>
    );
    }
}
 

export default FormFilter

