import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./Map.module.scss";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={16}
          initialCenter={{ lat: 43.4610907, lng: -80.5254834 }}
        >
          <Marker
            position={{ lat: 43.4610907, lng: -80.5254834 }}
            name={"Xander Drinnan's Business"}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="info-window">
              <p>Xander Drinnan's Business</p>
              <p>City of Waterloo, Ontario</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "", //removed for public use
})(MapContainer);
