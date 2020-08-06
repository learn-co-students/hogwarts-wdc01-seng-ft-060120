import React from 'react'

const SortBar = (props) =>
{
  return(
    <select onChange={(e) => props.setSort(e.target.value)} className="ui dropdown ">
      <option value="">Sort By</option>
      <option value="none">None</option>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
    </select>
    )
}

export default SortBar;