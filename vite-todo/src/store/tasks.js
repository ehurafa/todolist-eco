import { defineStore } from "pinia"

export const useTaskStore = defineStore("tasks", {
  state: () => {
    return { tasks: [{
      id: 1,
      title: 'título da task',
      description: 'descrição da taks',
      selected: true
    },
    {
      id: 2,
      title: 'título da task 2',
      description: 'descrição da taks',
      selected: false
    },
    {
      id: 3,
      title: 'título da task',
      description: 'descrição da taks',
      selected: true
    }
  
  ] }
  },
  actions: {
    list(tasks) {
      this.tasks = tasks
    },
    add({ title }) {
      this.tasks.push({ title, selected: false })
    },
    select(idx, selected) {
      this.tasks[idx].selected = selected
      console.log(this.tasks[idx])
      console.log(this.tasks[0])
    },
    delete(idx) {
      this.tasks.splice(idx, 1)
    }

  },
  getters: {
    task: (state) => {

    },
    allTasks: (state) => {
      return state.tasks
    }
  },
});