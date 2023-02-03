import React, { useRef, useEffect, useContext, useState} from 'react';
import mapboxgl from 'mapbox-gl'; 
import { DataContext } from "../contexts/DataContext";
import IconNaranja from "../assets/icons-map/_event-ticket.svg";
import IconVerde from "../assets/icons-map/_playground.svg";
import IconLila from "../assets/icons-map/_event-book.svg";
import IconYellow from "../assets/icons-map/_restaurant.svg"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const Map = () => {
  const { actividades, actBiblio, parques, geoAgenda, geoParques, geoBiblio, geoRestaurantes} = useContext(DataContext);
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
        id: "biblio-circle",
        type: "symbol",
        source: "biblio",
        layout: {
          "icon-image": 'lila',
          "icon-size": 0.25
        }
      });
      
      map.addLayer({
        id: "unclustered-point",
        type: "symbol",
        source: "parques",
        layout: {
          "icon-image": 'verde',
          "icon-size": 0.25
        }
      });
      map.addLayer({
        id: "actividades-circle",
        type: "symbol",
        source: "actividades",
        layout: {
          "icon-image": 'naranja',
          "icon-size": 0.25
        }
      });
      map.addLayer({
        id: "restaurants-circle",
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
    // cleanup function to remove map on unmount
    return () => map.remove()
  },[])
  return (
    <div ref={mapContainer} className="map-container map h-5/6"></div>
  );
}
  


export default Map;