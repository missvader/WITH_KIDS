import React from "react";
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Biblio from "../components/Biblio";
import errorBiblioImage from "../assets/errorBiblioImage2.jpg"
import "../App.css"

const AgendaBiblios = () => {
  const {actBiblio }= useContext(DataContext)
  return (
    <div className="container h-6/7">
            <div>
            {
              actBiblio?.map(item => (
                <Biblio
                  key={item.acte_id}
                  id={item.acte_id}
                  titol={item.titol}
                  espai={item.grup_adreca.adreca_nom}
                  tags={item.tipus}
                  data={item.data_inici}
                  dies={item.dies}
                  horari={item.observacions_horari}
                  durada={item.durada}
                  telefon = {item.telefon_contacte}
                  adreca = {item.grup_adreca.adreca}
                  publico={item.public}
                  imatge= {item.imatge}
                  errorImage = {errorBiblioImage}
                  url= {item.acte_url}
                />
              ))
              }
            </div>
          </div>
  )
}

export default AgendaBiblios;