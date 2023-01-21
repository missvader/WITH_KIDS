import React, { useRef, useEffect, useState } from 'react';
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl} from "react-map-gl"
import mapboxgl from 'mapbox-gl'; 
import 'mapbox-gl/dist/mapbox-gl.css';

const MapView = () => {
  const [viewState, setViewState] = useState({
    latitude:41.4026419193428,
    longitude:2.1943282266720554,
    zoom: 13,
  })
  return (
    <div className='map-container'>
      <Map
        {...viewState}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onMove={evt => setViewState(evt.viewState)}
      >
        <NavigationControl
          position="bottom-right"
        />
        <GeolocateControl/>
      </Map>  
    </div>
  );
}

export default MapView;