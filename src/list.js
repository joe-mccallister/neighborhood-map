import React, { Component } from 'react'

class ListVenues extends Component {
    render() {
        return(
            <ul className="venue-list">
            {this.props.venue.map((venue) => (
                <li>
                {venue.name}
                </li>
            ))}
            </ul>
        )
    }
}
export default ListVenues