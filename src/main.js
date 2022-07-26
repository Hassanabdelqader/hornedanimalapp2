import React from "react";
import HornedBeast from "./HornedBeast";


class Main extends React.Component {

    constructor(props) {
        super(props);   
        this.state = {
            
            selectedBeast2: "",
      
          }
        
    }
    selectedItem = (item) => {
        this.setState({
         // this: item
        });
      }

      handleSelected = (item) => {
        this.props.fill(item);
    }
    


    render() {
        return (
            <div className='cardDiv' onClick={()=>{this.props.runModal(true)}  }  >
                {
                this.props.jsonData.map((element, index) =><HornedBeast title={element.title} imageUrl={element.image_url} description={element.description} key={index}  selectedBeast={this.handleSelected}  arr={element}/>)
                }
                
            </div>
        )
         

    }
}
export default Main;

