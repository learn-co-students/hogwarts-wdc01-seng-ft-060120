import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <span>Filter By:</span>
                <br></br>
                <span>Greased</span> <input type="radio" name="filter" value='greased' 
                onClick={(e) => this.props.handleFilter(e)}/> 
                <span>not-greased</span> <input type="radio" name="filter" value='not-greased' 
                onClick={(e) => this.props.handleFilter(e)}/> 
                <br></br>
                <select onChange={(e) => this.props.handleSort(e)}>
                    <option value="name" > Name</option >
                    <option value="weight" > Weight</option>
                </select>
            </div>
        )
    }
}
