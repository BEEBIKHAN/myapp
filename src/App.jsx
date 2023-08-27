
import React, { useState,  useEffect} from 'react';
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar';
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
   const [selectedPokemonName, setSelectedPokemonName] = useState(pokemonList[0].name);    

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
   const isFirstPokemon = pokemonIndex === 0;
   const isLastPokemon = pokemonIndex === pokemonList.length - 1;

   
  useEffect(() => {
    if (selectedPokemon && selectedPokemon.name) {
      setSelectedPokemonName(selectedPokemon.name);
    }
  }, [selectedPokemon]);

  useEffect(() => {
    alert("Hello Pokemon Trainer :)");
  }, []);

  useEffect(() => {
    if (selectedPokemonName === "pikachu") {
      alert("Pika Pikachu!!!");
    }
  }, [selectedPokemonName]);

   return (
     <div>
       <PokemonCard pokemon={selectedPokemon} />
       <NavBar
        onPreviousClick={PreviousClick}
        onNextClick={NextClick}
        isFirst={isFirstPokemon}
        isLast={isLastPokemon}
      />
     </div>
   );
 }
export default App
                                      