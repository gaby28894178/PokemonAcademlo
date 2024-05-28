import '../../style/PokeCard.css'
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
// import  '../../style/PokeCard.css'
import './style/pokecard.css'

const PokeCard = ({ poke }) => {
  const [pokemon, getPokemon] = useFetch();

  useEffect(() => {
    getPokemon(poke.url);
  }, [poke.url]);

  const navigate = useNavigate();

  const handlerNavDetail = () => {
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <article className={`poke border_${pokemon?.types[0].type.name} `}  onClick={handlerNavDetail}>
      <header className={`poke--header bg_${pokemon?.types[0].type.name}`} >

        {
          pokemon?.sprites?.other['official-artwork']?.front_default && (
            <img className='poke--sprite' src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
          )}
      </header>
        
      <section className={` poke--body `}>
        <h3 className='poke--name'>{pokemon?.name}</h3>
        <ul className='poke--types'>
          {pokemon?.types.map(typeInfo => (
            <li className='poke--types--item' key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
        </ul>
        <hr className='poke--hr' />
        <ul className='poke--stats'>
          {pokemon?.stats.map(statInfo => (
            <li className='poke--stats--items' key={statInfo.stat.url}> 
              <span className='poke--stats--label' >{statInfo.stat.name} </span><br />
              <br /><span  className='poke--stats--value'>{statInfo.base_stat} </span><br />
            </li>
          ))}
      
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
