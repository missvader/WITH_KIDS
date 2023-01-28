import React, { useRef, useEffect, useContext} from 'react';
import mapboxgl from 'mapbox-gl'; 
import { DataContext } from "../contexts/DataContext";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const MapComponent = () => {
  const {geojsonAgenda, geojsonParques, geojsonActBiblio} = useContext(DataContext);
  const mapContainer = useRef();
  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only rendered once
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v11",
      center: [2.15899, 41.38879],
      zoom: 12
    });
   // only want to work with the map after it has fully loaded
   map.on("load", () => {
    map.addSource("biblio", {
      type: "geojson",
      data: geojsonActBiblio
    });
    map.addSource("parques", {
      type: "geojson",
      data: geojsonParques
    });
    map.addSource("actividades", {
      type: "geojson",
      data: geojsonAgenda
    })
    map.addLayer({
      id: "biblio-circle",
      type: "circle",
      source: "biblio",
      paint: {
        "circle-color": '#F48A4C',
        "circle-radius": 5
      }
    });
    map.addLayer({
      id: "parque-circle",
      type: "circle",
      source: "parques",
      paint: {
        "circle-color": '#24CE81',
        "circle-radius": 5
      }
    });
    map.addLayer({
      id: "actividades-circle",
      type: "circle",
      source: "actividades",
      paint: {
        "circle-color": '#9B328B',
        "circle-radius": 5
      }
    });
   });
   return () => map.remove();
  }, []);
  
  return (
    <div ref={mapContainer}></div> 
  );
  }
export default MapComponent;