
import './App.css';
import Header from './header';
import Footer from "./Footer";
import HornedBeast from "./HornedBeast";


function App() {
  let descriptionMusk = `Musk oxen live in the frozen Arctic and roam the tundra in search of the roots, mosses, and lichens that sustain them. In winter, they use their hooves to dig through snow to graze on these plants. During the summer, they supplement their diet with Arctic flowers and grasses, often feeding near water`;

  let descriptionBuffalo = `The name buffalo is applied to several different cud-chewing (ruminant) mammals of the ox family (Bovidae). The true, or Indian, buffalo (Bubalus bubalis), also known as water buffalo, or arna, exists both as a wild and domestic animal`;

  let arr = [{
    "_id": 1,
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  },

  {
    "_id": 2,
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Parent rhino with two babies",
    "keyword": "rhino",
    "horns": 2
  },

  {
    "_id": 3,
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a very silly unicorn head mask",
    "keyword": "unicorn",
    "horns": 1
  }]

  const rendered = [];

  arr.forEach(element => {

    rendered.push(<HornedBeast title={element.title} imageUrl={element.image_url} description={element.description} />);
    rendered.push(<hr />);
  });


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='Main'>

        {
          rendered
        }
      </main>
      <footer className='footer'>
        <Footer value={'Hasaan'} />
      </footer>
    </div>
  );
}

export default App;
/*


*/
