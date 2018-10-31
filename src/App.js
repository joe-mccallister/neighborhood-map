import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

state = {
  venues: []
}

  componentDidMount(){
    this.getVenues()
   }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBVuYwtERyg82CFa4CH_NmIOlPBZBMxsfs&callback=initMap")
    window.initMap = this.initMap
  }

getVenues = () => {
  const endPoint = "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
    client_id: "U5KSKJF0XTNWXACBB5BQZTZCAHZYRYJ0Z0ALBSURJJXIYVRY",
    client_secret: "B4UZAAKVMHGILD3IWA3TOVG0USBKOX04AZBIMEPJMJTAK5YE",
    query: "drinks",
    near: "Denver, CO",
    v: "20182507"
  }

  axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      },  this.renderMap())
    })
    .catch(error => {
      console.log("ERROR " + error)
    })
}  

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.762989, lng: -104.983984},
      zoom: 15
         })
      
    this.state.venues.map(myVenue => {


      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
            })
          });
        
        }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

function loadScript(url){
    var index = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default App;
