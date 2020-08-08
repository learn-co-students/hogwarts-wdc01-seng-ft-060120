import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    hogs: [],
    filterBy: 'all',
    sortBy: 'None'
  }

  changeFilterBy = filterBy => this.setState({ filterBy })
  changeSortBy = sortBy => this.setState({ sortBy })

  filterHogs = () => {
    let filterBy = this.state.filterBy
    let hogs = [...this.state.hogs]

    if ( filterBy !== 'all'){
      if ( filterBy === 'greased') hogs = hogs.filter( hog => hog.greased === true)
      if ( filterBy === 'non-greased') hogs = hogs.filter( hog => hog.greased === false)
    }
    return this.sortHogs( hogs )
  }

  sortHogs = hogs => {
    let sortBy = this.state.sortBy

    if (sortBy === 'Name') hogs.sort( (hog1, hog2) => hog1.name.localeCompare(hog2.name) )
    if (sortBy === 'Weight') hogs.sort( (hog1, hog2) => hog1.weight - hog2.weight)

    return hogs
  }

  render() {
    return (
      <div className="App">
        <Nav 
        changeFilterBy={this.changeFilterBy}
        changeSortBy={this.changeSortBy}
        sortBy={this.state.sortBy}
        />
        <HogContainer hogs={this.filterHogs()} />
      </div>
    )
  }

  componentDidMount() {
    this.setState({ hogs })
  }
}

export default App
