
import React, { createContext, useContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); 
  useEffect(() => {
    const obtener20Pokemones = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=10`
        );
        const data = await response.json();
        const pokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return {
              name: data.name,
              img: data.sprites?.other?.dream_world?.front_default || "",
              stats: data.stats || [],
              type: data.types || [],
            };
          })
        );
        setPokemonList(pokemons);
      } catch (error) {
        console.error("Error obteniendo los Pokémon:", error);
      }
    };

    obtener20Pokemones();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonList, searchResult, setSearchResult, selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;

