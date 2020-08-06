import React from 'react'
import Pig from './Pig'


const PigDisplay = (props) => {
  const pigs = props.pigs;
return <div className='ui cards'>{ pigs.map(pig => <Pig pig={pig}/>) }</div>
}

export default PigDisplay;