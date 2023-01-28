import React, {useEffect, useState} from "react";
import axios from "axios";
import { DataContext } from "./DataContext";

const baseAgendaURL = "https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json?$query=SELECT%0A%20%20%60codi%60%2C%0A%20%20%60data_fi%60%2C%0A%20%20%60data_inici%60%2C%0A%20%20%60data_fi_aproximada%60%2C%0A%20%20%60denominaci%60%2C%0A%20%20%60descripcio%60%2C%0A%20%20%60entrades%60%2C%0A%20%20%60horari%60%2C%0A%20%20%60subt_tol%60%2C%0A%20%20%60tags_mbits%60%2C%0A%20%20%60tags_categor_es%60%2C%0A%20%20%60tags_altres_categor_es%60%2C%0A%20%20%60enlla_os%60%2C%0A%20%20%60documents%60%2C%0A%20%20%60imatges%60%2C%0A%20%20%60v_deos%60%2C%0A%20%20%60adre_a%60%2C%0A%20%20%60codi_postal%60%2C%0A%20%20%60comarca_i_municipi%60%2C%0A%20%20%60email%60%2C%0A%20%20%60espai%60%2C%0A%20%20%60latitud%60%2C%0A%20%20%60localitat%60%2C%0A%20%20%60longitud%60%2C%0A%20%20%60regi_o_pa_s%60%2C%0A%20%20%60tel_fon%60%2C%0A%20%20%60url%60%2C%0A%20%20%60imgapp%60%2C%0A%20%20%60descripcio_html%60%0AWHERE%0A%20%20(%60comarca_i_municipi%60%0A%20%20%20%20%20%3D%20'agenda%3Aubicacions%2Fbarcelona%2Fbarcelones%2Fbarcelona')%0A%20%20AND%20(contains(%60tags_categor_es%60%2C%20'agenda%3Acategories%2Finfantil')%0A%20%20%20%20%20%20%20%20%20AND%20(%60data_fi%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20BETWEEN%20'2023-01-24T11%3A45%3A57'%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20'2023-12-19T11%3A45%3A57'%20%3A%3A%20floating_timestamp))"
const baseBiblioURL = "https://do.diba.cat/api/dataset/actesbiblioteques_ca/format/json/pag-ini/1/pag-fi/29999/camp-categoria-like/infants/camp-rel_municipis-like/08019/"
const baseParquesURL="https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?limit=500&resource_id=5a331131-fecb-40dc-89ce-d8d6e680cf80"

function Data({children}){
  const initialState = {
    isLoading : true,
    userLocation : undefined,
  }

	//inicializamos estados del listado de data 
  const [parques, setParques] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [actBiblio, setActBiblio] = useState([]);
  const [geojsonActBiblio, setGeojsonActBiblio] = useState({});
  const [geojsonParques, setGeojsonParques] = useState({})
  const [geojsonAgenda, setGeojsonAgenda] = useState({})
  /*FALTAN LOS RESTAURANTES */

  //hay que transformar los datos a geojson para poder mostrar layers en el mapa
  let geojson1 = {"type": "FeatureCollection", "features": []}
  let geojson2 = {"type": "FeatureCollection", "features": []}
  let geojson3 = {"type": "FeatureCollection", "features": []}

  
  useEffect(() => {
    axios.get(baseAgendaURL)
        .then((response) => {
          setActividades(response.data);
        })
    actividades.map((item) => {
      geojson3.features.push({
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
      });
    })   
    setGeojsonAgenda(geojson3)
        console.log(geojsonAgenda)
    console.log(actividades)
    
  },[]);
  useEffect(() => {
    axios.get(baseBiblioURL)
    .then((response) => {
      setActBiblio(response.data.elements);
    });
    console.log(actBiblio)
    actBiblio.map((item) => {
      const coord = (item.grup_adreca.localitzacio).split(",");
      geojson1.features.push({
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
      });
    })
    setGeojsonActBiblio(geojson1)
    console.log(geojsonActBiblio)
  },[]);

  useEffect(() => {
    axios.get(baseParquesURL)
      .then((response) => {
        setParques(response.data.result.records);
      });
      parques.map((item) => {
        geojson2.features.push({
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
        });
      })
      setGeojsonParques(geojson2)
      console.log(geojsonParques)
    console.log(parques)
  },[]);
  
 
	// Retornamos el Provider con el estado que será global con la función que lo actualiza
	return (
    <DataContext.Provider value={{
      parques,
      actividades, 
      actBiblio,
      isLoading: true,
      userLocation: undefined,
      geojsonActBiblio,
      geojsonParques,
      geojsonAgenda
      }}>
      {children}
    </DataContext.Provider>);
};
export default Data;