import { defineStore } from "pinia"

export const useTaskStore = defineStore("tasks", {
  state: () => {
    return { tasks: ['foo'] }
  },
  actions: {
    list(tasks) {
      this.tasks = tasks
    },
  },
  getters: {
    allTasks: (state) => {
      return state.tasks
    }
  },
});