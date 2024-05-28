import { useEffect} from "react";
import useFetch from "../../hooks/useFetch";
import style from  './selectType.module.css'

const SelectType = ({ setTypeSelect }) => {
  const [types, getTypes] = useFetch();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type?offset=0&limit=100";
    getTypes(url);
  }, [getTypes]);

  const handleChange = e => {
    setTypeSelect(e.target.value);
  };

  return (
    <select className={style.select} onChange={handleChange}>
      <option value="allPokemons">All Pokemons</option>
      {types?.results.map(typeInfo => (
        <option key={typeInfo.url} value={typeInfo.url}>
          {typeInfo.name}
        </option>
      ))}
    </select>
  );
};

export default SelectType;