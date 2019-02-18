import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
const ApiKey = process.env.REACT_APP_WEATHER_API_KEY;
 
export class MapContainer extends Component {
  
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  
  apiKey: (ApiKey)
})(MapContainer)