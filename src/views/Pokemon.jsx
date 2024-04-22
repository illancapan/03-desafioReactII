import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import NavBar from "../components/navBar/NavBar";
import Card from "../components/card/Card";
import InputBuscador from "../components/inputBuscador/InputBuscador";

const Pokemon = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const { name } = useParams();
  const { searchResult } = usePokemon();

  // const selectedPokemon = pokemonList.find(pokemon => pokemon.name === name) || {};

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
    console.log("Pokemon seleccionado en Pokemon:", pokemon); 
  };

  console.log("Pokemon seleccionado (estado) en Pokemon:", selectedPokemon);

  const handleBackToSearch = () => {
    setSelectedPokemon({});
  };

  return (
    <>
      <NavBar />
      <div className=" container d-flex w-100 flex-column">
      {/* <h1>Pokemon pantalla</h1> */}
      <InputBuscador  onPokemonSelect={handlePokemonSelect} />
      {selectedPokemon && Object.keys(selectedPokemon).length > 0 ? (
        <div>
          <h2>Detalles del Pokémon:</h2>
          <Card pokemon={selectedPokemon} />
          <button onClick={handleBackToSearch}>Volver al buscador</button>
        </div>
      ) : null}
      </div>
    </>
  );
};

export default Pokemon;