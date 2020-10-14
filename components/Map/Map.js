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
          initialCenter={{ lat: 43.4517589, lng: -80.4946055 }}
        >
          <Marker
            position={{ lat: 43.4517589, lng: -80.4946055 }}
            name={"Kitchener City Hall"}
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="info-window">
              <p>Kitchener City Hall, near Xander!</p>
              <p>Some address info here</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDdbAXped9-ITDclKtzydVAXqKRlqXgNGo",
})(MapContainer);
