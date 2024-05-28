import React from 'react';
import style from './nav.module.css';
import PokeDex from '../../style/pokemon.png'; // Ruta relativa a la imagen

export const Nav = () => {
  return (
    <div className={style.nav}>
      <a href="#"><img className={style.Pokedex} src={PokeDex} alt="PokeDex" /></a>
      <div className={style.nav2}></div>
      <div></div>
    </div>
  );
};
