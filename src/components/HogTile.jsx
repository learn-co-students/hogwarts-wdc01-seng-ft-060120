import React, { Component } from 'react';

export default class HogTile extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           clicked: false
        }
    }
    
      handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
    const { name, specialty, greased, weight } = this.props.hog;
    let hogImg = name.split(' ').join('_').toLowerCase();
        return (
            <div onClick={this.handleClick}>
                <img src={require(`../hog-imgs/${hogImg}.jpg`)} alt=''></img>
                <h1>{name}</h1>

                {this.state.clicked ? 
                <div >
                <p>{specialty}</p>
                <p>Greased?</p> <p> {greased ? "Hog is greased." : "Hog is not greased."} </p>
                <p>Weight</p> <p>{weight} pounds </p>
                <p>Highest Medal Achieved</p> <p> {this.props.hog['highest medal achieved']}</p>
                </div>
                : null }
        </div>
        )
    }
}

