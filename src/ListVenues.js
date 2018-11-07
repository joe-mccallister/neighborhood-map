import React, { Component } from 'react'
import App from './App.js'

class ListVenues extends Component {
    render() {
        return(
            <ul className='bar-list'>
                {this.props.ListVenues.map((venue) => (
                    <li key={ListVenues.id}>
                        {venue.name}
                    </li>
                ))}
            </ul>
        )
    }
}
export default ListVenues