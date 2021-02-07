import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state= {
    sushis: [],
    index: 0,
    eatenSushis: [],
    currentMoney: 100,
    displayForm: false
  }

  async componentDidMount(){
    const res = await fetch("http://localhost:3000/sushis")
    const sushis = await res.json()
    this.setState({sushis})
    
  }

  handleEaten = (eatenSushi) => {
    if (eatenSushi.price <= this.state.currentMoney) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, eatenSushi],
        currentMoney: this.state.currentMoney - eatenSushi.price
      })
    }
  }

  handleDisplayForm = () => {
    this.setState({displayForm: !this.state.displayForm})
  }

  handleAddMoney = (event) => {
    event.preventDefault();
    this.setState({
      currentMoney: this.state.currentMoney + parseInt(event.target.money.value),
      displayForm: false
    })
  }

  changeSushis =() => {
    if (this.state.index === 36) {
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index + 4})
    }
  }

  render() {
    let subSushis = this.state.sushis.slice(this.state.index, this.state.index + 4)
    return (
      <div className="app">
        <SushiContainer sushis={subSushis} changeSushis={this.changeSushis} 
        handleEaten={this.handleEaten} eatenSushis={this.state.eatenSushis}/>
        
        <Table 
        currentMoney={this.state.currentMoney} 
        eatenSushis={this.state.eatenSushis}
        displayForm={this.state.displayForm}
        handleDisplayForm={this.handleDisplayForm}
        handleAddMoney={this.handleAddMoney}
        />
      </div>
    );
  }
}

export default App;