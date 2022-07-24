import React from "react";

class HornedBeast extends React.Component{

    render(){
        return<div>
             <h2>{this.props.title}</h2>
            <img src={this.props.imageUrl} width={100} height={100} alt={this.props.alt}  />
           <p>{this.props.description}</p>
        </div>
    }
}
export default HornedBeast;