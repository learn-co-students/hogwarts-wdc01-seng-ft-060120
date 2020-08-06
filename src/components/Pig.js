import React from 'react'

class Pig extends React.PureComponent {
  state = {
    showDetails: false
  }
  render() {
  let PigImg = require(`../hog-imgs/${this.pigTag(this.props.pig.name)}.jpg`)
  return <div onClick={this.toggleDetails} className="card">
    <div className="image">
      <img src={PigImg} alt="piggy"/>
    </div>
    <div className="content">
      <div className="header">{this.props.pig.name}</div>
      {this.state.showDetails === true ? this.showDetails() : null}
    </div>
  </div>
  }

  pigTag = (name) => {
    return name.toLowerCase().replace(/\s/gi, "_")
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  showDetails = () => {
    return <div className="description">
      <p>Specialty: {this.props.pig.specialty}</p>
      <p>Weight: {this.props.pig.weight} tonnes</p>
      <p>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</p>
    </div>
  }

}

export default Pig;