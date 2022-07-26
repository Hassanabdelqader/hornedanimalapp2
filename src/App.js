
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
      selectedBeast2: "",

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className='Main' showModal={this.handler}>

            <SelectedBeast jsonData2={jsonData} closedFlage={this.handler} runValue={this.state.flag} oneDiv={this.state.selectedBeast2} />

            <Main jsonData={jsonData} runModal={this.handler} fill={this.selectedItem}  />

        </main>
        <footer className='footer'>
          <Footer value={'Hasaan'} />
        </footer>
      </div>
    );
  }
}

export default App;
