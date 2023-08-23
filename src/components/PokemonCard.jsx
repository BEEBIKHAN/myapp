

function PokemonCard() {
  const pokemon = pokemonList[1];

return (
  <div>
  <figure>
      {pokemon.imgSrc === undefined ? "???" : <img src={pokemon.imgSrc} />}
  </figure>
  <h1>{pokemon.name}</h1>

</div>
);}
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
export default PokemonCard;
