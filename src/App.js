import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  componentDidMount(){
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBVuYwtERyg82CFa4CH_NmIOlPBZBMxsfs&callback=initMap")
    window.initMap = this.initMap
  }

getVenues = () => {
  const endPoint = "https://api.foursquare.com/v2/venues/explore"
  const parameters = {
    client_id: "U5KSKJF0XTNWXACBB5BQZTZCAHZYRYJ0Z0ALBSURJJXIYVRY",
    client_secret: "B4UZAAKVMHGILD3IWA3TOVG0USBKOX04AZBIMEPJMJTAK5YE",
    query: "drinks",
    near: "Denver, CO",
  }

  axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      console.log(response)
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
