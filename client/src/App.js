import React from 'react';
import axios from "axios";
import './App.css';
import Players from "./components/Players"
import DarkMode from "./components/DarkMode"

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
        //console.log(res.data)
        const playerInfo = res.data;
        this.setState({
          players: playerInfo
        })
        //console.log(this.state.players);
      })
      .catch(err => console.log(err.response));
  }

  render(){
    return (
      <div className="App">
        
        <header>
          <h1>Women's World Cup Players Google Search Rankings</h1>

          <div className="darkToggler">Toggle Dark Mode<DarkMode /></div>
        </header>
        <div className="card">
          <Players players={this.state.players} /></div>
      </div>
    );
  }
  
}

export default App;
