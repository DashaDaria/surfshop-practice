import React, {Component} from 'react';
import './App.css'
import Surfboards from './Surfboards';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      surfboards: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/surfboards')
    .then(response => response.json())
    .then(surfboards => this.setState({surfboards}))
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <Surfboards surfboards={this.state.surfboards}/>
      </div>
    )
  }
}

export default App;
