
import PropTypes from 'prop-types';
function PokemonCard(props) {
  const {pokemon} = props;

return (
  <div>
  <figure>
      {pokemon.imgSrc === undefined ? ("???") : (<img src={pokemon.imgSrc}alt={pokemon.name} />)}
  </figure>
  <h1>{pokemon.name}</h1>
  

</div>
);}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
export default PokemonCard;
