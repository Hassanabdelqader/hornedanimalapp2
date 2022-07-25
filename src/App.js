
import './App.css';
import Header from './header';
import Footer from "./Footer";
import HornedBeast from "./HornedBeast";
import React from 'react';




function App() {


  const jsonData = require('./data.json');
  console.log(jsonData);
  const rendered = [];

  jsonData.forEach(element => {

    rendered.push(<HornedBeast title={element.title} imageUrl={element.image_url} description={element.description} />);

  });

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='Main'>
        <div className='cardDiv'>
          {
          rendered
        }
        </div>
  
      </main>
      <footer className='footer'>
        <Footer value={'Hasaan'} />
      </footer>
    </div>
  );
}

export default App;
