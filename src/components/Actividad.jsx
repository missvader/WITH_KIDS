import React from "react";
import Icon from '@mdi/react';
import { mdiHeart} from '@mdi/js';
const Actividad = ({titol, adreca, data,entrades, image, errorImage, url, link}) => {
  const urlImage = `https://agenda.cultura.gencat.cat` + image;
  const urlErrorImage = `https://agenda.cultura.gencat.cat` + errorImage;
  const linkToUrl = link.split(",");
  /* ------- ESTOS ERRORES Y WARNINGS SON POR LAS urlIMAGES--------------------------
  Revisar error de chrome -->  indicate wheter to send a cookie in a cross-site request by     specifying its SameSite attribute
   tambien revisar --> Cross-Origin Read Blocking (CORB) ha bloqueado la respuesta de orígenes cruzados <URL> con el tipo de MIME text/html. Consulta la página <URL> para obtener más información. */
  return (
    <div className="mx-auto bg-naranja p-8 ">
    <div className="card lg:card-side bg-base-100 shadow-xl w-96">
      <figure className="h-72"><img 
          src={urlImage} 
          alt="agenda activity image"
          onError={(e) => (e.currentTarget.src = urlErrorImage)}
          className= "w-full"
      /></figure>
      <div className="card-body">
        <div className="card-title bg-naranja/25 rounded-lg p-2"> 
          <h2 className="">{titol}</h2>
        </div>
        <div className="p-2">
          <p>{adreca}</p>
          <p>{data}</p>  
        </div> 
        <div className="card-actions justify-end">
          <button 
          className="btn btn-primary btn-xs"
          ><a
            href={linkToUrl[0]}
            target='_blank'
            >MORE INFO</a>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Actividad;