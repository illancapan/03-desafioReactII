import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBuscador from "../components/inputBuscador/InputBuscador";
import NavBar from "../components/navBar/NavBar";
import { usePokemon } from "../context/PokemonContext";

const Buscador = () => {
  const navigate = useNavigate();
  const { setSearchResult } = usePokemon();

  const handlePokemonSelect = async (selectedPokemon) => {
    try {
      const pokemonName = selectedPokemon.name;
      const pokemonData  = await buscarPokemon(pokemonName);
      if (pokemonData ) {
        setSearchResult(pokemonData );
        navigate(`/pokemon/${pokemonName}`);
      } else {
        console.log("No se encontraron resultados para:", pokemonName);
      }
    } catch (error) {
      console.error("Error al buscar Pokémon:", error);
    }
  };
  

// PUEBA CODIGO NUEVO

  // const buscarPokemon = async (pokemonName) => {
  //   try {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  //     const data = await response.json();
  
  //     if (response.ok) {
  //       return {
  //         name: data.name,
  //         img: data.sprites?.other?.dream_world?.front_default || "",
  //         stats: data.stats || [],
  //         type: data.types || [],
  //       };
  //     } else {
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error("Error al buscar Pokémon:", error);
  //     throw error; 
  //   }
  // };
  
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Buscador de Pokémon</h1>
        <InputBuscador onPokemonSelect={handlePokemonSelect} />
      </div>
    </>
  );
};

export default Buscador;


