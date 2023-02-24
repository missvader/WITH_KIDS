import React from "react";
import {useContext} from "react";
import { DataContext } from "../contexts/DataContext";
import Actividad from "../components/Actividad";
import "../App.css"
const Agenda = () => {
  const {filteredAct}= useContext(DataContext);
  
  return (
    <div className="container h-6/7 ">
            <div>
            {
              filteredAct?.map((item)=> (
                <Actividad
                  key={item.codi}
                  id={item.codi}
                  titol={item.denominaci}
                  espai={item.espai}
                  adreca={item.adre_a}
                  telefon={item.tel_fon}
                  email={item.email}
                  horari={item.horari}
                  data={item.data_inici}
                  entrades= {item.entrades}
                  tags={item.tags_categor_es}
                  image= {item.imatges}
                  errorImage = {item.imgapp}
                  url={item.url}
                  link={item.enlla_os}
                />
              ))
              }
            </div>
          </div>
  )
}

export default Agenda;