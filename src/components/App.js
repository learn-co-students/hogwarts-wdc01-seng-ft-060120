import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigGrid from "./PigGrid"
import PigDetails from './PigDetails'
import SortBar from "./SortBar"
import FilterBar from "./FilterBar"

class App extends Component {
  constructor()
  {
    super()
    this.state = 
    {
      pigs: hogs,
      filterBy: false,
      sortBy: "none",
      current: ""
    }
  }

  setFilter = (val) =>
  {
    this.setState({filterBy: val})
  }
  
  filterPigs = () =>
  {
    let pigs = [...this.state.pigs]
    if (this.state.filterBy)
      pigs = pigs.filter(pig => {return pig.greased})
    return pigs
  }
  setSort = (val) =>
  {
    this.setState ({sortBy: val});
  }

  sortPigs = () =>
  {
    let pigs = [...this.filterPigs()]
    const sortBy = this.state.sortBy

    if (sortBy === "weight")
      pigs.sort((pig,piggy) => pig.weight - piggy.weight)
    else if (sortBy === "name")
      pigs.sort((pig,piggy) => pig.name.localeCompare(piggy.name))

    return pigs
  }


  render() {
    return (
      <div className="App ui container">
        <div classname="ui left">
          <SortBar setSort={this.setSort}/><br/>
          <FilterBar checkedBox={this.setFilter} />
        </div><br/>        
        <div className="ui grid">
          <PigGrid pigs={this.sortPigs()} pigClicked={this.pigClicked}/>
          {this.state.current ? <PigDetails pig={this.state.current}/> : null}
        </div>
          
      </div>
    );
  }
  pigClicked = (pig) =>
  {
    this.setState({current: pig})
  }
}


export default App;
