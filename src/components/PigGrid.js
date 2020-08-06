import React from 'react'
import PigCard from './PigCard'

const PigGrid = (props) =>
{
  return(
    <div className="ui eight wide column">
      <div className="ui grid">
      {props.pigs.map((pig,index) => <PigCard 
                                    key={index} pig={pig} 
                                    img={pigPicSrc(pig.name)}
                                    pigClicked={props.pigClicked}
                                    />)}
    </div></div>
    
  )
}
//#Source https://bit.ly/2neWfJ2
const toSnakeCase = str =>
{  
  return (
    str &&
    str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_')
    )
}
  
const pigPicSrc = (name) =>
{   
  return `../hog-imgs/${toSnakeCase(name)}.jpg`
}
  export default PigGrid;