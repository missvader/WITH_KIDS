import React, { useRef, useEffect, useContext} from 'react';
import mapboxgl from 'mapbox-gl'; 
import { DataContext } from "../contexts/DataContext";
import Restaurants from "../data/restaurants.json"
import IconNaranja from "../assets/icons-map/_event-ticket.svg";
import IconVerde from "../assets/icons-map/_playground.svg";
import IconLila from "../assets/icons-map/_event-book.svg";
import IconYellow from "../assets/icons-map/_restaurant.svg"
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const MapComponent = () => {
  const { actividades, actBiblio, parques} = useContext(DataContext);
  console.log(actividades);
  console.log(parques);
  console.log(actBiblio)
  const geojsonAgenda = {
    "type": "FeatureCollection",
    "features": actividades.map(item => {
      return {
        "id": item.codi,
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            parseFloat(item.longitud),
            parseFloat(item.latitud)
            ]
        },
        "properties": {
           "titol": item.denominac,
           "espai": item.espai,
           "inici": item.data_inici,
           "fi": item.data_fi,
        }
      };
    })
  };
   console.log(geojsonAgenda) ;
   const geojsonBiblio = {
    "type": "FeatureCollection",
    "features": actBiblio.map(item => {
      const coord = (item.grup_adreca.localitzacio).split(",");
      return {
        "id": item.acte_id,
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            parseFloat(coord[1]),
            parseFloat(coord[0])
          ]
        },
        "properties": {
          "id": item.acte_id,
          "titol": item.titol,
          "organitzadors": item.acte_organitzadors,
          "inici": item.data_inici,
          "fi": item.data_fi,
          "dies": item.dies
        }
      };
    })
   };
  console.log(geojsonBiblio)
  const geojsonParques = {
    "type": "FeatureCollection",
    "features": parques.map(item => {
      return {
        "id": item._id,
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            parseFloat(item.Longitud),
            parseFloat(item.Latitud)
          ]
        },
        "properties": {
          "id": item._id,
        }
      };
    })
  };
  console.log(geojsonParques)
  const imageIconLila = new Image();
  imageIconLila.src = IconLila;
  const imageIconVerde = new Image();
  imageIconVerde.src = IconVerde;
  const imageIconNaranja = new Image();
  imageIconNaranja.src= IconNaranja;
  const imageIconYellow = new Image();
  imageIconYellow.src = IconYellow;
  
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
    map.addImage('lila', imageIconLila);
    map.addImage("naranja", imageIconNaranja );
    map.addImage("verde", imageIconVerde);
    map.addImage("amarillo", imageIconYellow);
    map.addSource("biblio", {
      type: "geojson",
      data: geojsonBiblio
    });
    map.addSource("parques", {
      type: "geojson",
      data: geojsonParques
    });
    map.addSource("actividades", {
      type: "geojson",
      data: geojsonAgenda
    });
    map.addSource("restaurantes", {
      type: "geojson",
      data: Restaurants
    });
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
      id: "parque-circle",
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
    })
   });
  }, []);
  
  return (
    <div  ref={mapContainer}></div> 
  );
  }
export default MapComponent;