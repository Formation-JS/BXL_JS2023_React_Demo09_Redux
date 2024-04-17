const PokemonListItem = ({id, name, types, onRemove}) => {

    return (
        <article> 
            <p>{name} ({types.join(', ')})</p>
            <button onClick={() => onRemove(id)}>Liberer</button>
        </article>
    )
}

const PokemonList = ({ pokemons, onRemove }) => {

    return (
        <section>
            {pokemons.map(pokemon => (
                <PokemonListItem {...pokemon} 
                    key={pokemon.id}
                    onRemove={onRemove}
                />
            ))}
        </section>
    );
}

export default PokemonList;