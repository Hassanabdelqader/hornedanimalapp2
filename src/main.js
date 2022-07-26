import React from "react";
import HornedBeast from "./HornedBeast";


class Main extends React.Component {

    constructor(props) {
        super(props);         
        
    }

  
    getData = () => {
      const render =  this.props.jsonData.map((element, index) =><HornedBeast title={element.title} imageUrl={element.image_url} description={element.description} key={index}/>)

        return render;
    }

    render() {
        return (
            <div className='cardDiv' onClick={()=>{this.props.runModal(true)}}>
                {this.getData()}
                
            </div>
        )

    }
}
export default Main;

