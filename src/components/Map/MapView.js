import React, { useState, useEffect } from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import data from "../../assets/location/data.json";
import Markers from "./VenueMarkers";

// import { useLocation, useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const MapView = ({location, title,  handleClickMap}) => {
  const [state, setState] = useState({
    currentLocation: { lat: 52.52437, lng: 13.41053 },
    zoom: 10,
    data,
  });

  // const location = useLocation();
  // const history = useHistory();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      const currentLocation = {
        lat: location.latitude,
        lng: location.longitude,
        name: "Tu ubicacion"
      };
      setState({
        ...state,
        data: {
          venues: state.data.venues.concat({
            name: "Tu ubicación",
            geometry: [location.latitude, location.longitude],
            // geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
      // history.replace({
      //   pathname: "/",
      //   state: {},
      // });
    }else{
      setState({
        data: {
          venues: state.data.venues.concat({
            name: "Tu ubicación",
            geometry: [location.latitude, location.longitude],
          }),
        },
      });
    }
  }, [location]);

  return (
    <Map center={state.currentLocation} zoom={state.zoom} onclick={e => handleClickMap(e)} >
      <TileLayer
        // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Circle center={state.currentLocation} fillColor="blue" radius={25000} />

      <Markers venues={state.currentLocation} />
      {/* <Markers venues={state.data.venues} /> */}
    </Map>
  );
};

export default MapView;