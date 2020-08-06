import React from 'react'

const PigDetails = (props) =>
{
  const {name,specialty,greased,weight,img} = props.pig
  const medal = props.pig["highest medal achieved"]
  return(
    <div className="ui eight wide column">
      <div className="ui card">
      <div className="ui image">
          <img src={`${img}`}/>
        </div>        
        <div className="content">
          <div className="header">{name}</div>
          <div className="specialty">Specialty: {specialty}</div>
          {greased ? <div className="greased">Greased</div> : null}
          <div className="weight">Weight: {weight}</div>
          <div className="medal">{medal} award winner</div>
        </div>
        <div className="extra content">
        </div>
      </div>
    </div>
    
  )
}

export default PigDetails;
