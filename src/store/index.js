import Vue from 'vue';
import Vuex from 'vuex';
import fs from 'fs';
import path from 'path';

Vue.use(Vuex);

const jsonFilePath = path.resolve(__dirname, '../tasks.json');

function readJsonFile() {
  const rawData = fs.readFileSync(jsonFilePath);
  return JSON.parse(rawData);
}

function writeJsonFile(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(jsonFilePath, jsonData);
}

export default new Vuex.Store({
  state: {
    tasks: readJsonFile()
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
      writeJsonFile(state.tasks);
    },
    EDIT_TASK(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
        writeJsonFile(state.tasks);
      }
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task);
    },
    editTask({ commit }, updatedTask) {
      commit('EDIT_TASK', updatedTask);
    }
  }
});