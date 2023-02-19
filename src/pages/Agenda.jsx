import React from "react";
import {useContext} from "react";
import { DataContext } from "../contexts/DataContext";
import Actividad from "../components/Actividad";
import "../App.css"
const Agenda = () => {
  const {filteredAct}= useContext(DataContext);
  
  return (
    <div className="container ">
            <div>
            {
              filteredAct?.map((item)=> (
                <Actividad
                  key={item.codi}
                  id={item.codi}
                  titol={item.denominaci}
                  adreca={item.espai}
                  data={item.data_inici}
                  entrades= {item.entrades}
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