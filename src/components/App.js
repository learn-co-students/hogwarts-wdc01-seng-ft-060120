import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter";

class App extends Component {
  state = {
    hogs: hogs,
    displayHogs: hogs
    
  }

  handleFilter = (e) => {
    if(e.target.value === 'greased'){
      let displayHogs = this.state.displayHogs.filter(hog => hog.greased === true);
      return this.setState({
        hogs: displayHogs
      })
    }
    else {
      if(e.target.value === 'not-greased'){
        let displayHogs = this.state.displayHogs.filter(hog => hog.greased === false);
        return this.setState({
        hogs: displayHogs
      })
      }
    }
  }

  handleSort = (event) => {
    console.log(event.target.value)
    if(event.target.value === 'name'){
      let displayHogs = this.state.displayHogs.sort((a,b) => a[event.target.value] < b[event.target.value] ? -1 : 1);
      return this.setState({
        hogs: displayHogs
      })
    }
    else {
      if(event.target.value === 'weight'){
        let displayHogs = this.state.displayHogs.sort((a,b) => a[event.target.value] < b[event.target.value] ? -1 : 1);
        return this.setState({
        hogs: displayHogs
      })
      }
    }
  }

  sortHogs = (e) => {
    debugger
    let newArray = this.state.displayHogs.sort((a,b) => a[e.target.value] < b[e.target.value] ? -1 : 1)
    console.log(newArray)

    this.setState({
      displayHogs: newArray
    })
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filter handleFilter={this.handleFilter} handleSort={this.handleSort}/>
        <HogContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;