import React from 'react';
import Menu from './Menu'
import HogContainer from './HogContainer';

export default class Container extends React.Component{

    constructor(){
        super();
        this.state = {
            hogs: [],
            sortBy: "none",
            greasedFilter: "none",
        }
    }

    componentDidMount(){
        this.setState({
            hogs: this.props.hogs,
        })
    }

    filterHogs = () => {
        let hogs = [...this.state.hogs]
        if (this.state.greasedFilter === "greased")
            hogs = hogs.filter(hog => hog.greased === true)
        else if (this.state.greasedFilter === "ungreased")
            hogs = hogs.filter(hog => hog.greased === false)
        return this.sortHogs(hogs)
    }

    setGreasedFilter = (value) => {
        this.setState({
            greasedFilter: value
        })
    }

    setSortBy = (value) => {
        this.setState({
            sortBy: value,
        })
    }

    sortHogs = (hogs) => {
        let sortBy = this.state.sortBy
        if(this.state.sortBy === "name")
                hogs.sort( ( hog1, hog2 ) => hog1.name.localeCompare(hog2.name) )
        else if (sortBy === "weight")
            hogs.sort ( ( hog1, hog2 ) => hog1.weight-hog2.weight)
        return hogs
    }

    

    render(){
        return(
            <div className="ui container">
                <Menu hogs={this.filterHogs()} setGreasedFilter={this.setGreasedFilter} sortBy={this.state.sortBy} setSortBy={this.setSortBy}/>
                <HogContainer hogs={this.filterHogs()} />
            </div>
        )
    }
}