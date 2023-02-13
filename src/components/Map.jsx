import React, { useRef, useEffect, useContext, useState} from 'react';
import mapboxgl from 'mapbox-gl'; 
import { DataContext } from "../contexts/DataContext";
import IconNaranja from "../assets/icons-map/_event-ticket.svg";
import IconVerde from "../assets/icons-map/_playground.svg";
import IconLila from "../assets/icons-map/_event-book.svg";
import IconYellow from "../assets/icons-map/_restaurant.svg"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = () => {
  const { actividades, actBiblio, parques,filteredAct, geoAgenda, geoParques, geoBiblio, geoRestaurantes} = useContext(DataContext);
  const mapContainer = useRef(null);
  const imageIconLila = new Image();
  imageIconLila.src = IconLila;
  const imageIconVerde = new Image();
  imageIconVerde.src = IconVerde;
  const imageIconNaranja = new Image();
  imageIconNaranja.src= IconNaranja;
  const imageIconYellow = new Image();
  imageIconYellow.src = IconYellow;
  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only rendered once
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [2.15899, 41.38879],
      zoom: 11.5,
      
    });
    // only want to work with the map after it has fully loaded
    map.on("load", () => {
      map.addImage('lila', imageIconLila);
      map.addImage("naranja", imageIconNaranja );
      map.addImage("verde", imageIconVerde);
      map.addImage("amarillo", imageIconYellow);
      //SOURCES
      map.addSource("biblio", {
        type: "geojson",
        data: geoBiblio
      });
      map.addSource("parques", {
        type: "geojson",
        data: geoParques,
        cluster: true,
        clusterMaxZoom: 15,
        clusterRadius:10,
        
      });
      map.addSource("actividades", {
        type: "geojson",
        data: geoAgenda
      });
      map.addSource("restaurantes", {
        type: "geojson",
        data: geoRestaurantes
      });
      //LAYERS
      map.addLayer({
        id: "biblio",
        type: "symbol",
        source: "biblio",
        layout: {
          "icon-image": 'lila',
          "icon-size": 0.25
        }
      });
      
      map.addLayer({
        id: "parques",
        type: "symbol",
        source: "parques",
        layout: {
          "icon-image": 'verde',
          "icon-size": 0.25,
        },
      });
      map.addLayer({
        id: "actividades",
        type: "symbol",
        source: "actividades",
        layout: {
          "icon-image": 'naranja',
          "icon-size": 0.25
        }
      });
      map.addLayer({
        id: "restaurantes",
        type: "symbol",
        source: "restaurantes",
        layout: {
          "icon-image": 'amarillo',
          "icon-size": 0.25
        }
      });
      //GEOLOCATION
      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });
      map.addControl(geolocate, "top-right");
      
      
    })
    // When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
  map.on('click', 'parques', (e) => {
  // Copy coordinates array.
  const coordinates = e.features[0].geometry.coordinates.slice();
  const description = e.features[0].properties.adreca;
  const barri = e.features[0].properties.barri;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  new mapboxgl.Popup()
  .setLngLat(coordinates)
  .setHTML(`<h3>AREA JOC INFANTIL</h3><p>${description}</p><p>${barri}</p>`)
  .addTo(map);
  });
   
  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'parques', () => {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'parques', () => {
  map.getCanvas().style.cursor = '';
  });
    // cleanup function to remove map on unmount
    return () => map.remove()
  },[])
  return (
    <div ref={mapContainer} className="map-container map h-5/6"></div>
  );
}
  


export default Map;