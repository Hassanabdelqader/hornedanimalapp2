import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
    handleClose = () => {
        this.props.handleClose(false);
    }

    render() {
        return (    
           
            <Modal show={this.props.runValue} onHide={this.handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.beast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={this.props.beast.image_url}/></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        );
        
    }
}
export default SelectedBeast;

