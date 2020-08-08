import React, { Fragment } from "react";
import Hog from './Hog'

class HelloWorld extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hogs: this.props.hogs.map(hog => {return {...hog, click: false}}),
      filterBy: 'all',
      sortedBy: 'none'
    }
  }

  addHogToClicked = (hog) => {
    this.setState({
      hogs: this.state.hogs.map(h => {
        if (h === hog) {
          return {...hog, click: !hog.click}
        }
        return h
      })
    })
  }

  renderHogs = () => {
    return this.getFilteredHogs().map(hog => 
      <Hog 
        hog={hog}
        clickFunction={this.addHogToClicked}
        click={hog.click}
      />
    )
  }

  getFilteredHogs = () => {
    let hogs = [...this.state.hogs]
    let filterBy = this.state.filterBy
    

    if ( filterBy === 'greased' ) {
      hogs = hogs.filter(hog => hog.greased)
    } else if (filterBy === 'not-greased') {
      hogs = hogs.filter(hog => !hog.greased)
    }
    
    return this.getSortedHogs(hogs)
  }

  getSortedHogs = (hogs) => {
    let sortBy = this.state.sortBy

    if (sortBy === 'name') {
      hogs = hogs.sort((hog1, hog2) => {return hog1.name.localeCompare(hog2.name)})
    } else if (sortBy === 'weight') {
      hogs = hogs.sort((hog1, hog2) => {return hog1.weight > hog2.weight ? -1 : 1})
    }

    return hogs
  }

  changeFilterBy = (filter) => this.setState({ filterBy: filter })
  changeSortBy = (sort) => this.setState({ sortBy: sort })

  render() {
    return (
      <div>
        <h1>Hogwarts</h1>
        <select onChange={(e) => this.changeFilterBy(e.target.value)}>
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="not-greased">Not Greased</option>
        </select>
        <select onChange={(event) => this.changeSortBy(event.target.value)}>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <div className="ui link cards">
          {this.renderHogs()}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
