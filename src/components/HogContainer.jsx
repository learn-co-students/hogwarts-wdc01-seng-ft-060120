import React, { Component } from 'react'
import HogTile from "./HogTile"

export default class HogContainer extends Component {
    render() {
    const hogMapper = (hog) => {
        return <HogTile hog={hog} key={hog.id}/>
    }
        return (
            <div>
                {this.props.hogs.map(hogMapper)}
            </div>
        )
    }
}
