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

            // Modifier le state sans le renvoyer (-> Utilisation de "Immer")
            state.tasks.push(task);
        })
        .addCase(removeTask, (state, action) => {
            const taskId = action.payload;

            state.tasks = state.tasks.filter(t => t.id !== taskId);

            // const index = state.tasks.findIndex(task => task.id === taskId);
            // state.tasks.splice(index, 1);
        })
        .addCase(updateTask, (state, action) => {
            const { taskId, data } = action.payload;

            const task = state.tasks.find(task => task.id === taskId);
            if(task) {
                task.title = data.title;
                task.desc = data.desc;
                task.updateAt = data.updateAt;
            }
        })
        .addCase(clearTasks, (state, action) => {
            
            state.tasks = [];
        })
        .addCase(changeTaskStatus, (state, action) => {
            const { taskId, status } = action.payload;

            const task = state.tasks.find(task => task.id === taskId);
            if(task) {
                task.status = status;
            }
        })
});

export default todoReducer;