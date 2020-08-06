import React from 'react'

const FilterBar = (props) =>
{
  return(
    <div onChange={e => props.checkedBox(e.target.checked)} className="ui slider checkbox">
      <input type="checkbox" name="greased" />
      <label>Only Greased Hogs</label>
    </div>
  )
}

export default FilterBar;