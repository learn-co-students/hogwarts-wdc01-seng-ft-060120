import React, { Fragment } from "react";

class FilterBar extends React.Component {
  render() {
    return (
      <div>
        <span>Filter: </span>
        <input type='radio' name='filter' onClick={(e) => this.props.filterHogs(e)} value="greased"/> <span>Greased</span>
        <input type='radio' name='filter' onClick={(e) => this.props.filterHogs(e)} value='not-greased' /> <span>not-greased</span>
        <br/>
        <label>Sort by:</label>
        <select>
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
        </select>
      </div>
    );
  }
}

export default FilterBar;
