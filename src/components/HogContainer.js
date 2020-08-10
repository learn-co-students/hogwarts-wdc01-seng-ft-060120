import React from 'react'
import HogTile from './HogTile'


const HogContainer = (props) => {
    return (<div>
        {props.hogs.map(hog => <HogTile hog={hog} displayHogDetails={props.displayHogDetails}/> )}
    </div>)
}


export default HogContainer