import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/PokedexPage/PokeCard';
import SelectType from '../components/HomePage/SelectType';
import '../style/PokeDex.css'; 
import pok from '../style/pokemon.png';

const PokedexPage = () => {
  const [nameSearch, setNameSearch] = useState('');
  const [typeSelect, setTypeSelect] = useState('allPokemons');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const trainer = useSelector(state => state.trainer);
  const [pokemon, getPokemons,getTypePokemons] = useFetch();

  useEffect(() => {
    if(typeSelect==='allPokemons'){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    getPokemons(url);
  }
  else{
        getTypePokemons(typeSelect);
  }
  }, [typeSelect]);

  const inputSearch = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setNameSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredData.length / itemsPerPage)));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const callbackFilter = (poke) => {
    return poke.name.includes(nameSearch);
  };

  const filteredData = pokemon?.results.filter(callbackFilter) || [];
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className='card-container'>
      <header className='header'>
        <img className='pok' src={pok} alt="" />
        <div className='divn'></div>
        <div className="poquebolla">
          <div className="line"></div>
          <div className="circle"></div>
          <div className="circlemini"></div>
        </div>
      </header>
      <div className='fcon'>
        <form className='form' onSubmit={handleSearch}>
          <p className='welcome'>Welcome , <span className='trainer'>{trainer}  </span>,  here you can find your favorite Pokémon</p>
          <input ref={inputSearch} type="text" />
          <button>Search</button>
        </form>
      </div>
      <SelectType setTypeSelect={setTypeSelect} />
      <div className='card-poke'>
        {currentData.length === 0 ? (
          <h1>Search Not Found, I'm Sorry</h1>
        ) : (
          currentData.map(poke => (
            <PokeCard key={poke.url} poke={poke} />
          ))
        )}
      </div>
      <div className='pagination'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
      
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PokedexPage;


// import React, { useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import useFetch from '../hooks/useFetch';
// import PokeCard from '../components/PokedexPage/PokeCard';
// import SelectType from '../components/HomePage/SelectType';
// import '../style/PokeDex.css'; 
// import pok  from '../style/pokemon.png'

// const PokedexPage = () => {
//   const [nameSearch, setNameSearch] = useState('');
//   const [typeSelect, setTypeSelect] = useState('allPokemons');
  
//   const trainer = useSelector(state => state.trainer);
//   const [pokemon, getPokemons] = useFetch();

//   useEffect(() => {
//     const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
//     getPokemons(url);
//   }, []);

//   const inputSearch = useRef();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setNameSearch(inputSearch.current.value.trim().toLowerCase());
//   };

//   const callbackFilter = (poke) => {
//     return poke.name.includes(nameSearch);
//   };

//   return (
//     <div>
//       <header className='header'>
//        <img className='pok' src={pok} alt="" />
//        <div className='divn'></div>
//        <div>
//        <div className="poquebolla">
//           <div className="line"></div>
//           <div className="circle"></div>
//           <div className="circlemini"></div>
//         </div>
//        </div>
//       </header>
//       <div className='fcon'>
//         <form className='form' onSubmit={handleSearch}>
//           <p className='welcome'>Welcome {trainer}, here you can find your favorite Pokémon</p>
//           <input ref={inputSearch} type="text" />
//           <button>Search</button>
      
//         </form>
//       </div>
//       <SelectType setTypeSelect={setTypeSelect} />
//       <div className='card-poke'>
//         {pokemon && pokemon.results.filter(callbackFilter).length === 0 ? (
//           <h1>Search Not Found, I'm Sorry</h1>
//         ) : (
//           pokemon?.results.filter(callbackFilter).map(poke => (
//             <PokeCard key={poke.url} poke={poke} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default PokedexPage;
