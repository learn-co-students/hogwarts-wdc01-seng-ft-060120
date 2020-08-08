import React from 'react'

const Sort = (props) => {
  let { sortBy, changeSortBy } = props
  return (
    <div>
      <strong>Sort By: </strong>
      <label>
        <input
          type="radio"
          value='None'
          checked={sortBy === 'None'}
          onChange={ e => changeSortBy( e.target.value ) }
          >
        </input>
        None
      </label>
      <label>
        <input
          type='radio'
          value='Name'
          checked={sortBy === 'Name'}
          onChange={e => changeSortBy(e.target.value)}
        ></input>
        Name
      </label>
      <label>
        <input
          type='radio'
          value='Weight'
          checked={sortBy === 'Weight'}
          onChange={e => changeSortBy(e.target.value)}
        ></input>
        Weight
      </label>
    </div>
  )
}

export default Sort