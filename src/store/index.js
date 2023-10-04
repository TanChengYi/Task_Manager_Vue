// src/store/index.js
import { createStore } from 'vuex';
import data from '@/data.json';  // Import JSON data

const store = createStore({
  state: {
    tasks: data.tasks  // Set initial state from JSON data
  },
  mutations: {
    // Mutation to add a new task
    addTask(state, task) {
      state.tasks.push(task);
    },
    // Mutation to update an existing task
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
    // Mutation to delete a task
    deleteTask(state, taskId) {
      const index = state.tasks.findIndex(task => task.id === taskId);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    }
  },
  actions: {
    // Actions would go here, if any
  },
  getters: {
    // Getters would go here, if any
  }
});

export default store;
