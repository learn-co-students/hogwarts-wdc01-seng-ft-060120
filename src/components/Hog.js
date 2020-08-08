import React from 'react'

function Hog(props) {

    let {hog, clickFunction, click} = props
    const description = (
        <div className="description">
            <p>Weight: {hog.weight}</p>
            <p>Specialty: {hog.specialty}</p>
            <p>Highest Medal: {hog['highest medal achieved']}</p>
        </div>
    )

    return (
        <div className="card" onClick={() => clickFunction(hog)}>
            <div className="image">
                <img 
                    src={require(`../hog-imgs/${hog.name.toLowerCase().replace(/ /g,'_')}.jpg`)} 
                    alt="Pig"
                />
            </div>
            <div className="content">
                <div className="header">
                    {hog.name}
                </div>
                <div className="meta">{hog.greased ? 'Greased' : 'Not Greased'}</div>
                <div className="description">
                    {click ? description : null}
                </div>
                <div className="extra content">
                    <span className="right floated"></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Hog