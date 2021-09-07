import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";


export class SelectedBeast extends Component {
   
    
    render() {
        
        return (
        
                 <>
      <Button variant="primary" onClick={this.props.handleOpen}>
         modal
      </Button>

      <Modal show={this.props.showMd} 
      // onHide={this.props.handleClose
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.title}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
        )
    }
}

export default SelectedBeast

