import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import FilterBar from "./FilterBar";
import HogContainer from "./HogContainer";

class App extends Component {

  constructor(){
    super() 

    this.state = {
      hogs: hogs.map(hog => {return {...hog, click:false} }),
      displayHogs: hogs.map(hog => {return {...hog, click:false}})
    }
  }

  displayHogDetails = (clickedHog) => {
    this.setState({
      hogs: this.state.hogs.map(hog=> {
        if (hog === clickedHog) {
          return {...hog, click: !hog.click}
        }
        return hog
      }), 

      displayHogs: this.state.displayHogs.map(hog => {
        if(hog === clickedHog){
          return {...hog, click: !hog.click}
        }
        return hog
      })
    })
  }


  filterHogs = (e) => {
    if (e.target.value === 'greased') {
      this.setState ({
        displayHogs: this.state.hogs.filter(hog => hog.greased)
      })
    } else {
      this.setState({
        displayHogs: this.state.hogs.filter(hog => !hog.greased)
      })
    }
  }

  sortHogs = (e) => {

    let key = e.target.value 
    let sortedArray = this.state.displayHogs.sort((a,b) => a[key] < b[key] ? -1: 1)

    this.setState({
      displayHogs: sortedArray
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <FilterBar 
        filterHogs = {this.filterHogs}
        sortHogs = {this.sortHogs}
        />

        <HogContainer 
        hogs = {this.state.displayHogs}
        displayHogDetails = {this.displayHogDetails}
        />
      </div>
    );
  }
}

export default App;
