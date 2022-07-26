import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';

class HornedBeast extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            favorited: 0,
            titleColor: false,
            disColor: false,
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
    getColortitle = () => {
        return this.state.titleColor;
    }
    setColor = () => {
        this.setState({
            titleColor: true
        });

    }
    getColorDis = () => {
        return this.state.disColor;
    }
    setColorDis = () => {
        this.setState({
            disColor: true
        });

    }

    getModel = () => {
        this.props.selectedBeast(this.props.arr);
      
      }
   

   
    render() {
        return <div className="CardDiv2" onClick={this.getModel}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imageUrl} onClick={this.setStatemy} width="300" height="400" 
                 />
                <Card.Body>
                    <Card.Title
                        style={{
                            color: this.getColortitle() ? 'red' : 'black',
                        }}
                        onClick={() => {
                            this.setColor();
                        }}>{this.props.title}</Card.Title>
                    <Card.Text
                        style={{
                            color: this.getColorDis() ? 'grey' : 'black',
                        }}
                        onClick={() => {
                            this.setColorDis();
                        }}>{this.props.description}
                    </Card.Text>
                    <Button variant="primary" onClick={this.setStatemy}>Love </Button>
                    {` ${this.getState()} `}  ❤ Favorited

                </Card.Body>
            </Card>
        </div>
    }
}
export default HornedBeast;