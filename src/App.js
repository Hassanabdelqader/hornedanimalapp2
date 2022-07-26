
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
      selectedBeast: "",

    }
  }


  selectedItem = (item) => {
    this.setState({
      selectedBeast: item
    });
  }
  handler = (f) => {
    this.setState({
      flag: f
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className='Main' selectedBeast={this.selectedItem} showModal={this.handler}>

            <SelectedBeast jsonData2={jsonData} closedFlage={this.handler} runValue={this.state.flag} oneDiv={this.selectedItem} />

            <Main jsonData={jsonData} runModal={this.handler} />

        </main>
        <footer className='footer'>
          <Footer value={'Hasaan'} />
        </footer>
      </div>
    );
  }
}

export default App;
