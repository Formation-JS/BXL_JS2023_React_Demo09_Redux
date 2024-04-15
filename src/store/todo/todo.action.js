// Action creators => Fontion qui créer un objet "action" pour le store
// ********************************************************************
import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'

// Ajouter une tache
//? - Sans toolkit
export const addTask_old = (task) => {
    // ↓ Object "action"
    return {
        type: 'todo/add',
        payload: {
            ...task,
            id: nanoid(),
            createAt: (new Date()).toISOString()
        }
    };
};
//? - Avec toolkit
export const addTask = createAction('todo/add', (task) => {
    // ↓ Valeur du payload de l'action
    return {
        payload: {
            ...task,
            id: nanoid(),
            createAt: (new Date()).toISOString(),
            updateAt: null
        }
    };
})


// Supprimer une tache
//? - Sans toolkit
export const removeTask_old = (taskId) => {
    // ↓ Object "action"
    return {
        type: 'todo/remove',
        payload: taskId
    };
};
//? - Avec toolkit
export const removeTask = createAction('todo/remove', (taskId) => {
    // ↓ Uniquement le payload de l'action
    return {
        payload: taskId
    };
});


// Vider la liste des taches
//? - Sans toolkit
export const clearTasks_old = () => {
    // ↓ Object "action"
    return {
        type: 'todo/clear'
    }
}
//? - Avec toolkit
export const clearTasks = createAction('todo/clear');


// Change le status d'une tache
//     - Non commencer
//     - En cours
//     - Terminé
export const changeTaskStatus = createAction('todo/changeStatus', ({ taskId, status }) => {
    return {
        payload: { taskId, status }
    }
});


// Editer une tache (hors status)
export const updateTask = createAction('todo/update', ({ taskId, data }) => {
    return {
        payload: { 
            taskId, 
            data : {
                ...data,
                updateAt: new Date().toISOString()
            }
        }
    }
});

// Remarque : La méthode "prepareAction" n'est pas obligatoire quand les données sont
//            directement envoyé au payload.
//            Dans l'exemple de code, les méthodeS "removeTask" et "changeTaskStatus"
//            n'ont pas besoin du la méthode "prepareAction" 😉