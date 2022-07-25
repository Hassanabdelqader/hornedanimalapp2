import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            favorited: 0
        }
    }

    getState = () => {
        return this.state.favorited;
    }
    setStatemy = () => {
        this.setState({
            favorited: this.state.favorited + 1
        });
    }

    render() {
        return <div>
            <Card  style={{ width: '18rem'}}>
                <Card.Img variant="top" src={this.props.imageUrl} onClick={this.setStatemy} width="300" height="400" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary" onClick={this.setStatemy}>Love </Button>
                    {` ${this.getState()} `}  ❤ Favorited
                    
                </Card.Body>
            </Card>
        </div>
    }
}
export default HornedBeast;