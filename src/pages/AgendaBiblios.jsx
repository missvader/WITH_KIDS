import React from "react";
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Biblio from "../components/Biblio";
import "../App.css"

const AgendaBiblios = () => {
  const {actBiblio }= useContext(DataContext)
  return (
    <div className="container ">
            <div>
            {
              actBiblio?.map(item => (
                <Biblio
                  key={item.acte_id}
                  titol={item.titol}
                  adreca={item.acte_organitzadors}
                  tags={item.tags[0]}
                  data={item.data_inici}
                  dies={item.dies}
                  durada={item.durada}
                  tipus={item.tipus}
                  publico={item.public}
                  imatge= {item.imatge}
                  url= {item.acte_url}
                />
              ))
              }
            </div>
          </div>
  )
}

export default AgendaBiblios;