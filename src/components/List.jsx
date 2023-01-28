import React from "react";
import {useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import "../App.css"

const List = () => {
  const {actBiblio, actividades, geojsonActBiblio }= useContext(DataContext)
  
  return (
     
          <div className="container ">
            <h1 className="text-3xl font-bold underline">Este es listado actBiblio</h1>
            {/*actividades?.map((item)=>{
              return(
                <div className="border">
                  <ul key={item.codi} >
                    <li >{item.denominaci}</li>
                  </ul>
                </div>
              )
            })*/}
            {
              actBiblio?.map(item => {
                return (
                  <div key={item.acte_id} >
                    <ul  >
                      <li >{item.titol}</li>
                      <li>Latitud: :</li>
                      <li>Longiud: </li>
                    </ul>
                  </div>
                )
              })
            }
          </div>
        )
        
}


export default List;