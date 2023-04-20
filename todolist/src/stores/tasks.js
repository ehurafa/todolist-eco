import { defineStore } from "pinia"

export const useTaskStore = defineStore("task", {
  state: () => {
    return { tasks: [] }
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