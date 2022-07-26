
import './App.css';
import Header from './header';
import Footer from "./Footer";
import React, { useState } from 'react';
import jsonData from './data.json';
import Main from "./main";
import SelectedBeast from "./SelectedBeast";




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      selectedBeast: " ",
     
    }
  }
  
  handler =(f)=>{
    this.setState({
      flag: f
    })
  }
  handleSelect = (item) => {
    this.setState({
      selectedBeast: item
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className='Main' selectedBeast={this.handleSelect} showModal= {this.handler}>

          <SelectedBeast 
          runValue={this.state.flag}
          beast={this.state.selectedBeast}
          handleClose={this.handler}
         />

          <Main jsonData={jsonData} runModal= {this.handler} />

        </main>
        <footer className='footer'>
          <Footer value={'Hasaan'} />
        </footer>
      </div>
    );
  }
}

export default App;
