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

    renderElement() {
        if (this.props.selectedBeastfromForm == 0) {
            return this.props.jsonData.map((element, index) =>
                //element.horns == 
                <HornedBeast title={element.title} imageUrl={element.image_url} description={element.description} key={index} selectedBeast={this.handleSelected} arr={element} />
            )
        }
        else {
            return this.props.jsonData.filter(element =>
                (element.horns == this.props.selectedBeastfromForm)

            ).map((filteredName, index) => (

                <HornedBeast title={filteredName.title} imageUrl={filteredName.image_url} description={filteredName.description} key={index} selectedBeast={this.handleSelected} arr={filteredName} />

            )
            )
        }


        /*
        (this.props.selectedBeastfromForm == 0) ? return{

            this.props.jsonData.map((element, index) =>
                //element.horns == 


                <HornedBeast title={element.title} imageUrl={element.image_url} description={element.description} key={index} selectedBeast={this.handleSelected} arr={element} />


            )

        } : {

            this.props.jsonData.filter(element =>
                (element.horns == this.props.selectedBeastfromForm)

            ).map((filteredName, index) => (

                <HornedBeast title={filteredName.title} imageUrl={filteredName.image_url} description={filteredName.description} key={index} selectedBeast={this.handleSelected} arr={filteredName} />

            ))
        }
*/
    }



    render() {
        return (
            <div className='cardDiv' onClick={() => { this.props.runModal(true) }}  >

                {
                    //First of div 



                    this.renderElement()
                    //end of Div 
                }

            </div>

        )


    }

}
export default Main;

