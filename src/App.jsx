
import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
   name: "bulbasaur",
   imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
 },
 {
  name: "charmander",
  imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
   },
   {
    name: "pikachu",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
   },
   {
    name: "mew",
   },];
   function App() {
   const [pokemonIndex, setPokemonIndex] = useState(0);

   const PreviousClick = () => {
     if (pokemonIndex > 0) {
       setPokemonIndex(pokemonIndex - 1);
     }
   };
 
   const NextClick = () => {
     if (pokemonIndex < pokemonList.length - 1) {
       setPokemonIndex(pokemonIndex + 1);
     }
   };
 
   const selectedPokemon = pokemonList[pokemonIndex];
 
   return (
     <div>
       <PokemonCard pokemon={selectedPokemon} />
       <div>
       {pokemonIndex > 0 && (
         <button onClick={PreviousClick} disabled={pokemonIndex === 0}>Previous</button>
         )} 
         {pokemonIndex < pokemonList.length - 1 && (
         <button onClick={NextClick} disabled={pokemonIndex === pokemonList.length - 1}>Next</button>
         )}
       </div>
     </div>
   );
 }
export default App
