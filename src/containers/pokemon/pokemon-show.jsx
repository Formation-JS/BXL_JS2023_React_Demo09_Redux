import { useSelector } from 'react-redux';
import PokemonDetail from '../../components/pokemon/pokemon-detail.jsx';
import { useDispatch } from 'react-redux';
import { addPokemonTeam } from '../../store/pokemon/pokemon.action.js';

const PokemonShow = () => {

    const {
        isLoading, 
        current: pokemon, 
        error
    } = useSelector(state => state.pokemon.search);

    const dispatch = useDispatch();

    const handleAddPokemonTeam = () => {
        dispatch(addPokemonTeam(pokemon));
    }

    return (
        <div>
            {isLoading ? (
                <p>Recherche du pokemon en cours...</p>
            ) : pokemon ? (
                <>
                    <button onClick={handleAddPokemonTeam}>Ajouter à mon équipe</button>
                    <PokemonDetail {...pokemon} />
                </>
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