import React from "react"
import Form from 'react-bootstrap/Form';

export default class Forms extends React.Component{

    handlechange = (selcted) =>{

        this.props.getData(selcted.target.value);
      
        }

    render(){
        return(
            <Form.Select aria-label="Default select example" 
            onChange={this.handlechange}
            >
            <option value="0">All</option>
            <option value="1" >One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        )
    }


}