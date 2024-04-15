// Reducer => Traitement à effectuer pour résoudre les actions reçu
// ****************************************************************
import { createReducer } from '@reduxjs/toolkit';
import { addTask, changeTaskStatus, clearTasks, removeTask, updateTask } from './todo.action.js';

const initialState = {
    tasks: [],
    message: 'Hello World'
};

const todoReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(addTask, (state, action) => {
            const task = action.payload;

            // Création d'une nouvelle version du state du store
            return {
                ...state,
                tasks: [...state.tasks, task]
            };
        })
        .addCase(removeTask, (state, action) => {
            const taskId = action.payload;

            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== taskId)
            };
        })
        .addCase(updateTask, (state, action) => {
            const { taskId, data } = action.payload;

            return {
                ...state,
                tasks: state.tasks.map(task => task.id !== taskId ? task : ({ 
                    ...task,
                    title: data.title,
                    desc: data.desc,
                    updateAt: data.updateAt
                }))
            };
        })
        .addCase(clearTasks, (state, action) => {
            
            return {
                ...state,
                tasks: []
            };
        })
        .addCase(changeTaskStatus, (state, action) => {
            const { taskId, status } = action.payload;

            return {
                ...state,
                tasks: state.tasks.map(task => task.id !== taskId ? task : ({
                    ...task,
                    status: status
                }))
            };
        })
});

export default todoReducer;