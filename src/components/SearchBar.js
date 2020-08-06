import React from 'react';

const SearchBar = ( props ) => {

  let { sortBy, changeSortBy, toggleFilter } = props

  return (
    <div>
      <strong>Sort by: </strong>
      <label>
        <input
          type="radio"
          value="none"
          checked={ sortBy === "none" }
          onChange={ (e) => changeSortBy( e.target.value ) }
        />
        None 
      </label>
      <label>
        <input
          type="radio"
          value="name"
          checked={ sortBy === "name" }
          onChange={ (e) => changeSortBy( e.target.value ) }
        />
        Name 
      </label>
      <label>
        <input
          type="radio"
          value="weight"
          checked={ sortBy === "weight" }
          onChange={ (e) => changeSortBy( e.target.value ) }
        />
        Weight 
      </label>
      <br/>

      <label>
        <strong>Filter Grease: </strong>
        <input type="checkbox"
        onChange={toggleFilter} 
        name="grease-filter" 
        value="" />
      </label>

    </div>
  );
}


export default SearchBar;