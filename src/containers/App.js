import React, {Component} from 'react';
import './App.css'
import Surfboards from './Surfboards';

const surfboards = [
  {
    name: "wind",
    price: 55,
    img_url: "",
    length: 33
  },
   {
     name: "fire",
     price: 66,
     img_url: "",
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
