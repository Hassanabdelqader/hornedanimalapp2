import React from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
 
    constructor(props) {
        super(props);
       
      }
 
    handleClose = () => {
        this.props.closedFlage(false);
    }

    render() {
        return (    
           
            <Modal show={this.props.runValue} onHide={this.handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.oneDiv.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>  
                <img src={this.props.oneDiv.image_url}
                 alt={this.props.oneDiv.title}
                 style= {{width : '100%', height : '300px'}}/>
                        <span>{this.props.oneDiv.title}</span>
                        <span>{this.props.oneDiv.description}</span>
                        
                        </Modal.Body>
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

