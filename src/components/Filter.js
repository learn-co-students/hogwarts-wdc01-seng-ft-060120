import React from 'react'

const Filter = (props) => {
  return (
    <div className="ui form container">
      <div className="field">
        <select onChange={e => props.changeFilterBy(e.target.value) } className="ui search dropdown">
          <option value="all">All</option>
          <option value="greased">Greased</option>   
          <option value="non-greased">Non Greased</option>   
        </select>
      </div>
    </div>
  )
}

export default Filter
