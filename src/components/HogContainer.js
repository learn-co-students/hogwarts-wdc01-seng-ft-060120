import React from "react"
import HogTile from './HogTile'

const HogContainer = (props) => {

  function renderHogs() {
    return props.hogs.map( hog => <HogTile hog={hog} className="ui eight wide column" />)
  }

  return (
    <div className='ui grid container'>
      {renderHogs()}
    </div>
  )
}

export default HogContainer;
