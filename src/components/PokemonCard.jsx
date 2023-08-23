
function PokemonCard(props) {
  const {pokemon} = props;

return (
  <div>
  <figure>
      {pokemon.imgSrc === undefined ? "???" : <img src={pokemon.imgSrc}alt={pokemon.name} />}
  </figure>
  <h1>{pokemon.name}</h1>

</div>
);}

export default PokemonCard;
