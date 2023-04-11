import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./navBar.module.css"
import github from "../../imagenes/github (1).png"
import linkedin from "../../imagenes/linkedin (1).png"
import { getAllVideogames } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function NavBar() {

    const dispatch = useDispatch()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getAllVideogames())
    }

    return (
        
            <nav className={s.nav}>
                <div className={s.busqueda}>
                    <SearchBar />
                </div>

                
                <div className={s.imagencita}>
        <a href="https://github.com/Armando1509" target="_blank" rel="noreferrer" >

        <img src={github} alt="Github" className={s.gif} />
        </a>
      </div>
      <div className={s.imagencita}>
        <a href="https://www.linkedin.com/in/armando-gomez-2b1a1424a/" target="_blank" rel="noreferrer">

        <img src={linkedin} alt="Linked" className={s.gif} />
        </a>
      </div>
          


                
                <div className={s.search}>
                    <button className={s.btn}onClick={e => handleRefresh(e)}>Refresh</button>
                    <span className={s.opcion}><NavLink to={'/create'} className={s.to}> Create Videogame</NavLink></span>
                </div>
            </nav>
        //</div>
    )
}