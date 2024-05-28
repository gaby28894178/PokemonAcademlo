import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTrainer } from '../store/slicesglobales/trainer.slice';
import '../style/HomePeage.css';
import poke from '../style/pokemon.png';

const HomePage = () => {
  const inputTrainer = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainer(inputTrainer.current.value.trim()));
    navigate('/pokedex');
  };

  return (
    <div>
      <img className="poke" src={poke} alt="Pokémon" />
      <p>Hi trainer, if you want to find your favorite Pokémon please give me your trainer name</p>
      <form onSubmit={handlerSubmit}>
        <h4>Welcome Trainer Log In</h4>
        <input ref={inputTrainer} type="text" />
        <button>Comenzar</button>
      </form>
      <div className="conten"></div>
      <div className='ralla-red'></div>
      <div className="footer">
        <div className="poquebolla">
          <div className="line"></div>
          <div className="circle"></div>
          <div className="circlemini"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
