import axios from 'axios'

export const getPokemon = async (pokemonName) => {

    // Requete AJAX
    const response = await axios.get(`pokemon/${pokemonName}`, {
        baseURL: 'https://tyradex.vercel.app/api/v1/',
    })

    // Gestion de l'erreur de l'API (Car les dev qui l'ont fait sont des boulet :p)
    if(response.data.status) {
        throw new Error(response.data.message);
    }

    // Mapping (Object de l'API vers les object pour l'app)
    const data = {
        name: response.data.name.fr,
        pokedexId: response.data.pokedex_id,
        imgUrl: response.data.sprites.regular,
        types: response.data.types.map(t => t.name),
        stats : response.data.stats
    };

    // Renvoi des données mappés
    return data;
} 