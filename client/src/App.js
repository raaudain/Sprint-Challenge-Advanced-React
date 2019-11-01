import React from 'react';
import axios from "axios";
import './App.css';
import Players from "./components/Players"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data)
        const playerInfo = res.data;
        this.setState({
          players: playerInfo
        })
        console.log(this.state.players);
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Players players={this.state.players} />
      </div>
    );
  }
  
}

export default App;
