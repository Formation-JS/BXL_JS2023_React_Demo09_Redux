import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';

const TodoListItem = ({ data, index }) => {
    const item = data[index];

    return (
        <div>{item.name}</div>
    )
}

const TodoListPage = () => {

    // Consomation du store de Redux (via le state global de redux)
    const tasks = useSelector(state => state.todo.tasks);

    return (
        <>
            <Link to='/todo/add'>Ajouter une nouvelle tache</Link>
            <h2>Liste des taches</h2>
            <List
                height={200}
                itemSize={20}
                itemData={tasks}
                itemCount={tasks.length}>
                {TodoListItem}
            </List>
        </>
    );
};


export default TodoListPage;