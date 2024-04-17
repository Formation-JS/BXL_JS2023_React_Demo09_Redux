import SearchBar from '../../../components/search-bar/search-bar.jsx';

const PokemonSearchPage = () => {

    const handleSearchPokemon = (pokemonName) => {
        console.log(`Rechercher : ${pokemonName}`);
    } 

    return (
        <>
            <h2>Rechercher...</h2>
            <SearchBar
                label='Nom du Pokemon'
                btnSubmitName='Chercher'
                onSearch={handleSearchPokemon}
            />
        </>
    );
};

export default PokemonSearchPage;