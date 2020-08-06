import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigDisplay from './PigDisplay';
import SearchBar from "./SearchBar";


class App extends Component {
  constructor() {
    super ();
    this.state = {
      pigs: hogs,
      sortBy: "none",
      filterGrease: false,
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <SearchBar 
        sortBy={this.state.sortBy} 
        toggleFilter={this.toggleFilter} 
        changeSortBy={this.changeSortBy} />
        <PigDisplay pigs={this.filterGrease()}/>
      </div>
    );
  }

  changeSortBy = ( sort ) => this.setState({ sortBy: sort })
  toggleFilter = (  ) => this.setState({ filterGrease: !this.state.filterGrease })

  filterGrease = ( ) => {
    let pigs = [...this.state.pigs]
    let filterGrease = this.state.filterGrease

    if ( filterGrease === true )
      pigs = pigs.filter( pig => pig.greased === true )
    return this.sortPigs( pigs )
  }


  sortPigs = ( pigs ) => {
    let sortBy = this.state.sortBy

    if ( sortBy === 'name' )
      pigs.sort( ( pig1, pig2 ) => pig1.name.localeCompare(pig2.name))
    else if ( sortBy === "weight" )
      pigs.sort( ( pig1, pig2 ) => pig1.weight - pig2.weight )

      return pigs
  }
}

export default App;
