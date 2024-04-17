import { Link } from 'react-router-dom';


const TodoAddPage = () => {

    return (
        <>
            <Link to='/todo'>Retourner à la liste</Link>
            <h2>Ajouter une tache</h2>
        </>
    );
};


export default TodoAddPage;