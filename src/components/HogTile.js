import React from 'react'

class HogTile extends React.Component {
  state = {
    displayMoreInfo: false
  }

  changeDisplayBoolean = () => {
    this.setState({ displayMoreInfo: !this.state.displayMoreInfo })
  }

  parseImgSrc = () => {
    const imgName = this.props.hog.name.replace(/ /g, '_').toLowerCase()
    return require(`../hog-imgs/${imgName}.jpg`)
  }

  render(){
    let { hog } = this.props
    return (
      <div onClick={this.changeDisplayBoolean} className="ui card">
        <div className="image">
          <img src={this.parseImgSrc()} />
        </div>
        <div className="content">
          <a className="header">{hog.name}</a>
        </div>
        { this.state.displayMoreInfo ? 
          <div class="extra-content">
            { hog.greased? <div>Greased</div> : <div> Not Greased </div> }
            <div>Highest medal achieved: {hog['highest medal achieved']}</div>
            <div>Speciality: {hog.specialty}</div>
            <div>Weigh: {hog.weight} tons</div>
          </div>
          : null
        }
      </div>
    )
  }
}

export default HogTile
