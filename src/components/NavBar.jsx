import React from 'react';


function NavBar({ onPokemonClick, pokemonList, selectedPokemonIndex }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => onPokemonClick(index)}
          disabled={index === selectedPokemonIndex}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
