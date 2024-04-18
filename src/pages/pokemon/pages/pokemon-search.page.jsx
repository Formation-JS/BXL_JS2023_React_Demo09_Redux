import { useDispatch } from 'react-redux';
import SearchBar from '../../../components/search-bar/search-bar.jsx';
import { fetchPokemonByName } from '../../../store/pokemon/pokemon.action.js';
import { useSelector } from 'react-redux';
import PokemonShow from '../../../containers/pokemon/pokemon-show.jsx';

const PokemonSearchPage = () => {

    const dispatch = useDispatch();

    const handleSearchPokemon = (pokemonName) => {
        dispatch(fetchPokemonByName(pokemonName));
    } 

    return (
        <>
            <h2>Rechercher...</h2>
            <SearchBar
                label='Nom du Pokemon'
                btnSubmitName='Chercher'
                onSearch={handleSearchPokemon}
            />
            <PokemonShow />
        </>
    ); 
};

export default PokemonSearchPage;