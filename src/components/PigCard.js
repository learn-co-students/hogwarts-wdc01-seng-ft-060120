import React from 'react'

const PigCard = (props) =>
{
  const {name,img} = props.pig
  return (
    <div  className="ui card six wide column link"
          onClick={() => props.pigClicked(props.pig)}>
        <div className="ui image">
          <img src={`${img}`}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
    </div>
  )
}
export default PigCard;