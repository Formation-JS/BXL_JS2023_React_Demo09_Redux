import { useSelector } from 'react-redux';
import PokemonDetail from '../../components/pokemon/pokemon-detail.jsx';

const PokemonShow = () => {

    const {
        isLoading, 
        current: pokemon, 
        error
    } = useSelector(state => state.pokemon.search);

    return (
        <div>
            {isLoading ? (
                <p>Recherche du pokemon en cours...</p>
            ) : pokemon ? (
                <PokemonDetail {...pokemon} />
            ) : error ? (
                <>
                    <p>Error lors de la recherche 😥</p>
                    <p>{error}</p>
                </>
            ) : (
                <p>Aucun pokemon...</p>
            )}
        </div>
    )
}

export default PokemonShow;