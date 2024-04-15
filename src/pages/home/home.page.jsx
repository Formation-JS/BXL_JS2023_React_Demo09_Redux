import { useDispatch } from 'react-redux';
import { addTask } from '../../store/todo/todo.action.js';
import { useSelector } from 'react-redux';

const HomePage = () => {

    // ↓ Permet d'acceder au données du store de Redux
    const tasks = useSelector(storeState => storeState.todo.tasks);

    // ↓ Permet d'obtenir l'acces au dispatcher du store de Redux
    const dispatch = useDispatch();

    const handleTestRedux = () => {
        // Fonction pour tester redux -> Sera supprimer par la suite :o

        const task = {
            name: 'Test Task',
            desc: 'Ceci est une tache de démo !'
        };

        dispatch(addTask(task));
    }

    return (
        <>
            <h1>Home</h1>
            <p>Nombre de tache : {tasks.length}</p>

            <button onClick={handleTestRedux}>Test Redux</button>
        </>
    );
};

export default HomePage;