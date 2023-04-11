import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";


const LandingPage = () => {
  return (
    <div className={s.full}>
      <div className={s.full_inner}>
        <div className={s.content}>
          <h1 className={s.titulo}>Videogames APP by Armando Gomez</h1>
          <Link to="/home">
            <button className={s.btn}>
              <span className={s.ingresar}>GET STARTED</span>
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
