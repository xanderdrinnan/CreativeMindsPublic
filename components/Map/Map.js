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
          initialCenter={{ lat: 43.130853, lng: -80.270542 }}
        >
          <Marker
            position={{ lat: 43.130853, lng: -80.270542 }}
            name={"Creative Minds Childrens Services"}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="info-window">
              <p>Creative Minds Childrens Services</p>
              <p>5 Wade Ave, Brantford, Ontario, Canada N3T 1W8</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBCpbb8uaGxtEOA3FS7KCenXtJfcdPhRBY",
})(MapContainer);
