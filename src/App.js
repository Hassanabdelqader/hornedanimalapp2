
import './App.css';
import Header from './header';
import Footer from "./Footer";
import React, { useState } from 'react';
import jsonData from './data.json';
import Main from "./main";
import SelectedBeast from "./SelectedBeast";
import Forms from "./form";




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      selectedBeast2: "",

      hornedSelceted : 0
    }
  }


  selectedItem = (item) => {
    this.setState({
      selectedBeast2: item
    });
  }
  handler = (f) => {
    this.setState({
      flag: f
    })
  }

  itemSelect = (value) => {
    console.log(typeof value);
    this.setState({
      
      hornedSelceted : value
    });
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className='Main' showModal={this.handler}>

          <h1>The Beast Galaray </h1>

          <Forms getData={this.itemSelect} />

          <SelectedBeast jsonData2={jsonData} closedFlage={this.handler} runValue={this.state.flag} oneDiv={this.state.selectedBeast2} />

          <Main jsonData={jsonData} runModal={this.handler} fill={this.selectedItem} selectedBeastfromForm={this.state.hornedSelceted}/>

        </main>
        <footer className='footer'>
          <Footer value={'Hasaan'} />
        </footer>
      </div>
    );
  }
}

export default App;
