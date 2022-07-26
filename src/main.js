import React from "react";
import HornedBeast from "./HornedBeast";


class Main extends React.Component {

    constructor(props) {
        super(props);   
           
        
    }


    render() {
        return (
            <div className='cardDiv' onClick={()=>{this.props.runModal(true)}  }  >
                {
                this.props.jsonData.map((element, index) =><HornedBeast title={element.title} imageUrl={element.image_url} description={element.description} key={index}  filldata = {this.props.selectedBeast}  arr={element}/>)
                }
                
            </div>
        )
         

    }
}
export default Main;

