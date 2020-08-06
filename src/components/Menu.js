import React from 'react';
import { Container } from 'semantic-ui-react';



const Menu = (props) => {

    let { sortBy, setSortBy } = props

    return(
        <Container>
            <label>Filter Hogs: </label>
            <select name="filter" id="hogs" onChange={event => {props.setGreasedFilter(event.target.value)}}>
                <option value="none">No Filter</option>
                <option value="greased">Greased</option>
                <option value="ungreased">Ungreased</option>
            </select><br/>
            <label>Sort Hogs: </label>
            <input
                type="radio"
                id="none"
                value="none"
                checked={ sortBy === "none"}
                onChange={(e) => {setSortBy(e.target.value)}}
            />
            <label>None  </label>
            <input
                type="radio"
                id="name"
                value="name"
                checked={ sortBy === "name"}
                onChange={(e) => {setSortBy(e.target.value)}}
            />
            <label>Name  </label>
            <input
                type="radio"
                id="weight"
                value="weight"
                checked={ sortBy === "weight"}
                onChange={(e) => {setSortBy(e.target.value)}}
            />
            <label>Weight  </label>
        </Container>
    )
}

export default Menu;

