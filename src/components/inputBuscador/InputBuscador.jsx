import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';

const InputBuscador = ({ onPokemonSelect }) => { //recibir onPokemonSelect como prop
  const { pokemonList } = useContext(PokemonContext);
  const navigate = useNavigate(); // inicia useNavigate

  const handlePokemonSelect = (e) => {
    const selectedPokemonName = e.target.value;
    const selectedPokemon = pokemonList.find(pokemon => pokemon.name === selectedPokemonName);
    console.log("El pokemon seleccionado:", selectedPokemon); 
    navigate(`/pokemon/${selectedPokemonName}`);
    onPokemonSelect(selectedPokemon);
  };

  console.log("lista de Pokemon en InputBuscador:", pokemonList);

  return (
    <div>
      <select onChange={handlePokemonSelect}>
        <option value="">Selecciona un Pokémon</option>
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBuscador;