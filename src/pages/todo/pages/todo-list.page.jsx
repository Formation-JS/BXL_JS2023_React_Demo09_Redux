import { Link } from 'react-router-dom';


const TodoListPage = () => {

    return (
        <>
            <Link to='/todo/add'>Ajouter une nouvelle tache</Link>
            <h2>Liste des taches</h2>
        </>
    );
};


export default TodoListPage;