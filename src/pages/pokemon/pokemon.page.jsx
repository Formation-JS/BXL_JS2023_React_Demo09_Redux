import { Outlet } from 'react-router-dom'

const PokemonPage = () => {

    return (
        <>
            <h1>Pokemon</h1>
            <Outlet />
        </>
    );
};

export default PokemonPage;