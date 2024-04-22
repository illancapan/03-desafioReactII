import React, { useContext, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

const ComponentePrueba = () => {
  const { pokemonList } = useContext(PokemonContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleChange = (e) => {
    const selectedName = e.target.value;
    const selected = pokemonList.find(pokemon => pokemon.name === selectedName);
    setSelectedPokemon(selected);
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <select
          className="form-select"
          onChange={handleChange}
          aria-label="Select a Pokémon"
        >
          <option value="">Choose a Pokémon...</option>
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      {selectedPokemon && (
        <div className="card">
          <div className="card-body">
            <h3>Nombre: {selectedPokemon.name}</h3>
            <img src={selectedPokemon.img} alt={selectedPokemon.name} />
            <h4>Stats:</h4>
            <ul>
              {selectedPokemon.stats.map((stat, index) => (
                <li key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
            <h4>Tipo:</h4>
            <ul>
              {selectedPokemon.type.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentePrueba;