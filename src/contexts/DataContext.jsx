import React, {useState} from "react";
import axios from "axios";
import { createContext } from "react";

const baseParquesURL = "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=5a331131-fecb-40dc-89ce-d8d6e680cf80"
const baseFuentesURL = "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=32c82e7b-2471-4576-9941-b5044312e49f&limit=50"
const baseAgendaURL = "https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json?$query=SELECT%0A%20%20%60codi%60%2C%0A%20%20%60data_fi%60%2C%0A%20%20%60data_inici%60%2C%0A%20%20%60data_fi_aproximada%60%2C%0A%20%20%60denominaci%60%2C%0A%20%20%60descripcio%60%2C%0A%20%20%60entrades%60%2C%0A%20%20%60horari%60%2C%0A%20%20%60subt_tol%60%2C%0A%20%20%60tags_mbits%60%2C%0A%20%20%60tags_categor_es%60%2C%0A%20%20%60tags_altres_categor_es%60%2C%0A%20%20%60enlla_os%60%2C%0A%20%20%60documents%60%2C%0A%20%20%60imatges%60%2C%0A%20%20%60v_deos%60%2C%0A%20%20%60adre_a%60%2C%0A%20%20%60codi_postal%60%2C%0A%20%20%60comarca_i_municipi%60%2C%0A%20%20%60email%60%2C%0A%20%20%60espai%60%2C%0A%20%20%60latitud%60%2C%0A%20%20%60localitat%60%2C%0A%20%20%60longitud%60%2C%0A%20%20%60regi_o_pa_s%60%2C%0A%20%20%60tel_fon%60%2C%0A%20%20%60url%60%2C%0A%20%20%60imgapp%60%2C%0A%20%20%60descripcio_html%60%0AWHERE%0A%20%20(%60comarca_i_municipi%60%0A%20%20%20%20%20%3D%20'agenda%3Aubicacions%2Fbarcelona%2Fbarcelones%2Fbarcelona')%0A%20%20AND%20(contains(%60tags_categor_es%60%2C%20'agenda%3Acategories%2Finfantil')%0A%20%20%20%20%20%20%20%20%20AND%20(%60data_fi%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20BETWEEN%20'2023-01-19T11%3A45%3A57'%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20'2023-12-19T11%3A45%3A57'%20%3A%3A%20floating_timestamp))"
const baseBiblioURL = "https://do.diba.cat/api/dataset/actesbiblioteques_ca/format/json/pag-ini/1/pag-fi/29999/camp-categoria-like/infants/camp-rel_municipis-like/08019/"

export const DataContext = createContext([])

export const DataContextProvider= (props) => {
	//inicializamos estados del listado de data con un array vacio
  const [parques, setParques] = useState([]);
  const [fuentes, setFuentes] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [actBiblio, setActBiblio] = useState([]);
  const [parque, setParque] = useState({}); 
  const [fuente, setFuente] = useState({});
  const [actividad, setActividad] = useState({});
  const [biblio, setBiblio] = useState({});

  

  const getActBiblio = () => {
    axios.get(baseBiblioURL)
      .then((response) => {
        setActBiblio((prev) => prev.concat(response.data.elements));
      });
  }
  const getParques = () => {
    axios.get(baseParquesURL)
      .then((response) => {
        setParques((prev) => prev.concat(response.data.result.records));
        
      });
  }
  const getFuentes = () => {
    axios.get(baseFuentesURL)
      .then((response) => {
        setFuentes((prev) => prev.concat(response.data.result.records));
        
      });
  } 
	// Retornamos el Provider con el estado que será global con la función que lo actualiza
	return (
    <DataContext.Provider value={{
      parques,
      fuentes, 
      actividades, 
      actBiblio,
      setParques,
      setFuentes,
      setActividades,
      setActBiblio,
      getParques,
      getFuentes,
      getActBiblio
      }}>
      {props.children}
    </DataContext.Provider>);
};