
const PokemonDetail = ({name, imgUrl, types, stats}) => {

    return (
        <div>
            <p>{name}</p>
            <p>Types: {types.join(', ')}.</p>
            <img src={imgUrl} alt={name} />
        </div>
    )
}

export default PokemonDetail;