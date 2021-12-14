import React from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { venues } = props;
  if (venues.length > 0) {
    return venues.map((venue, i) => (
      <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
        <MarkerPopup data={venue} />
      </Marker>
    ));
  } else {
    return (
      <Marker position={venues} icon={VenueLocationIcon}>
        <MarkerPopup data={venues.name} />
      </Marker>
    );
  }

  // return <>{markers}</>;
};

export default VenueMarkers;
