import React from "react";
import { useEffect, useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import "../App.css"

const List = () => {
  const {actBiblio, setActBiblio, getActBiblio} = useContext(DataContext);
  useEffect(() => {
    getActBiblio();
    //eslint-disable-next-line
  },[])
  console.log(actBiblio)
  return (
     
          <div className="container ">
            <h1 className="text-3xl font-bold underline">Este es listado actBiblio</h1>
            {actBiblio?.map((item)=>{
              return(
                <div className="border">
                  <ul key={item.acte_id} >
                    <li >{item.titol}</li>
                  </ul>
                </div>
              )
            })}
          </div>
        )
        
}


export default List;