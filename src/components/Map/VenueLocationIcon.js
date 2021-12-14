import L from "leaflet";

export const VenueLocationIcon = L.icon({
  iconUrl: require("../../assets/location/venue_location_icon.svg"),
  iconRetinaUrl: require("../../assets/location/venue_location_icon.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
},{
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
});

export const circle = L.circle( {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
})