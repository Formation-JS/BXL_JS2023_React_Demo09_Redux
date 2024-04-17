import { Link } from 'react-router-dom';
import TodoForm from '../../../components/todo-form/todo-form.jsx';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../store/todo/todo.action.js';

const TodoAddPage = () => {

    // Methode 'dispatch' permet d'envoyer des actions vers le store redux
    const dispatch = useDispatch();

    const handleNewTask = useCallback((data) => {

        // Envoi de l'action pour ajouter une nouvelle tache
        dispatch(addTask(data));

    }, [dispatch]);

    return (
        <>
            <Link to='/todo'>Retourner à la liste</Link>
            <h2>Ajouter une tache</h2>
            <TodoForm
                onValidate={handleNewTask}
                btnSubmitName='Ajouter la tache'
            />
        </>
    );
};


export default TodoAddPage;