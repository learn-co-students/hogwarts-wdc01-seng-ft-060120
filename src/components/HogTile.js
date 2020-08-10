import React from 'react'


const HogTile = (props) => {

    let hogImage= props.hog.name.split(' ').join('_').toLowerCase()
    return (<div onClick={() => props.displayHogDetails(props.hog)}>
        <img src={require(`../hog-imgs/${hogImage}.jpg`)} />
        <p>{props.hog.name}</p>


        { props.hog.click ? <div>
            <h4>{props.hog.specialty}</h4>
        <h4>{props.hog.greased ? "Hog is greased" : 'Hog is not greased'}</h4>
        <h4>{props.hog.weight}</h4>
        <h4>{props.hog['highest medal achieved']}</h4>

        </div>
        :null}
        
        <br />
        <br />
        
    </div>)
}


export default HogTile