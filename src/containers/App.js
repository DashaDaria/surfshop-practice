import React, {Component} from 'react';
import './App.css'
import Surfboards from './Surfboards';

const surfboards = [
  {
    name: "wind",
    price: 55,
    img_url: "https://images.evo.com/imgp/700/87599/401113/almond-surfboards-quadkumber-5-8-surfboard-gold-tint-top.jpg",
    length: 33
  },
   {
     name: "fire",
     price: 66,
     img_url: "https://images.evo.com/imgp/700/106869/449572/blackfern-6-0-bean-surfboard-6-0-front.jpg",
     length: 44
   }
]

class App extends Component {
  render(){
    return (
      <div className="App">
        <Surfboards surfboards={surfboards}/>
      </div>
    )
  }
}

export default App;
