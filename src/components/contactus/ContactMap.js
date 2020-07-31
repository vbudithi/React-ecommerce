import React, {Component} from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import styled from "styled-components";
import UserForm from './UserForm'

const TOKEN =
  "pk.eyJ1IjoiaHVjaGVuc2NiIiwiYSI6ImNqdHpnbGZ5ejFneXEzeW81a3B3anJkZGoifQ.RjMCIQBbS0dlzTl85EogQw";

const cities = [
  {
    name: "ShopNow-Melbourne (Main Branch)",
    latitude: -37.736421,
    longitude: 144.965948,
    color: "Green",
  },
  {
    name: "ShopNow-Geelong",
    latitude: -38.147330,
    longitude: 144.357216,
    color: "blue",
  },
];

const center = {
  latitude:
    (Math.min(...cities.map(c => c.latitude)) +
      Math.max(...cities.map(c => c.latitude))) /
    2,
  longitude:
    (Math.min(...cities.map(c => c.longitude)) +
      Math.max(...cities.map(c => c.longitude))) /
    2,
};

class Map extends Component {
  state = {
    viewport: {
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 8,
    },
    popupInfo: null,
  };

  updateViewport = viewport => {
    this.setState({ viewport });
  };

  render() {
    return (
      <div className="container">
      <ReactMapGL
        {...this.state.viewport}
        width="100%"
        height={400}
        onViewportChange={this.updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        {cities.map(c => (
          <Marker
            key={c.name}
            latitude={c.latitude}
            longitude={c.longitude}
            offsetLeft={-10}
            offsetTop={-10}
          >
            <CitiMarker
              color={c.color}
              onMouseEnter={() => {
                this.setState({
                  popupInfo: c,
                });
              }}
            />
          </Marker>
        ))}

        {this.state.popupInfo && (
          <Popup
            anchor="left"
            longitude={this.state.popupInfo.longitude}
            latitude={this.state.popupInfo.latitude}
            closeButton={false}
          >
            <CitiInfo color={this.state.popupInfo.color}>
              {this.state.popupInfo.name}
            </CitiInfo>
          </Popup>
        )}

        <div style={{ position: "absolute", left: 10, top: 10 }}>
          <NavigationControl
            showCompass={false}
            onViewportChange={this.updateViewport}
          />
        </div>
      </ReactMapGL>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <div>
         <UserForm />
       </div>
    );
  };
}
export{Map, Form};


const CitiMarker = styled.div`
  background-color: ${props => props.color};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  opacity: 0.6;
  transition: opacity 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

const CitiInfo = styled.div`
  height: 100px;
  width: 100px;
  background: var(--mainGrey);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;