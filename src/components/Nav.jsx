import React from "react";
import {NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { mdiTicket } from '@mdi/js';
import { mdiSilverwareForkKnife } from '@mdi/js';
import { mdiBookOpenPageVariant } from '@mdi/js';
import { mdiSlide } from '@mdi/js';
import { mdiMapOutline } from '@mdi/js';
const Nav = () => {
 
  return (
    <div className="relative">
    <div className="nav h-1/6 flex flex-col w-full m-auto bg-blanco fixed bottom-0 ">
      <div className="flex m-auto">
        <NavLink
          to={"./"}
        >
          <button className="btn btn-xs bg-stone-400 border-0">
          <Icon path={mdiMapOutline} size={1} />
          </button>
        </NavLink>
      </div>
      <div className="flex flex-row">
      <NavLink
        to={"./profile"}
        className= "nav-item"
        >
        <i className="icon user-icon">
          <Icon path={mdiAccount} size={1} />
        </i>
        <span className="nav-text">Usuari</span>
      </NavLink>
      <NavLink 
        to={"./agendaCultural"}
        className="nav-item">
        <i className="icon agenda-icon">
          <Icon path={mdiTicket} size={1} />
        </i>
        <span className="nav-text">Agenda</span>
      </NavLink>
      <NavLink 
        to={"./restaurants"}
        className="nav-item">
        <i className=" icon restaurant-icon">
          <Icon path={mdiSilverwareForkKnife} size={1} />
        </i>
        <span className="nav-text">Restaurants</span>
      </NavLink>
      <NavLink 
        to={"./agendaBiblio"}
        className="nav-item">
        <i className=" icon biblio-icon">
          <Icon path={mdiBookOpenPageVariant} size={1} />
        </i>
        <span className="nav-text">BiblioAgenda</span>
      </NavLink>
      <NavLink 
        to={"./zonesDeJoc"}
        className="nav-item">
        <i className=" icon parc-icon">
          <Icon path={mdiSlide} size={1} />
        </i>
        <span className="nav-text">Area joc</span>
      </NavLink>
      </div>
      
    </div>
    </div>
  )
}

export default Nav;