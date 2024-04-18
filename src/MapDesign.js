import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapDesign = () => {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoieGFob3ZleDE1MCIsImEiOiJjbGZpNjU5amsxbmFxM3NuenoyMGNqM3Q4In0.vjlQIPhNv3XlfOUNC6Wolg"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
} 

export default MapDesign;