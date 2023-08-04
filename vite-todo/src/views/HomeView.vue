<template>
  <div class="home-view">
    <span class="material-symbols-outlined">
search
</span>
    <Item v-for="item in tasks" :key="item" :id="item.id" :selected="item.selected" @select="select" @deleted="deleted">
      <template v-slot:icon>icon</template>
    </Item>
  <ActionButton  :id="1" />
  <pre>
    {{ store.tasks }}
  </pre>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useTaskStore } from "../store/tasks"
import Item from "../components/Item.vue"
import ActionButton from "../components/ActionButton.vue"

export default {
  components: { Item, ActionButton },
  setup() {

    const store = useTaskStore()
    const list = store.allTasks

    let tasks = ref(list)

    const select = ({ id, selected }) => {
      console.log('selecionado ', selected)
      store.select(id, selected)
    }

    const deleted = (id) => {
      console.log(tasks.value)
      tasks.value.splice(id, 1)
    }

    onMounted(() => {
      console.log(tasks)
    })

    return {
      tasks,
      deleted,
      select,
      onMounted,
      store
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
</style>
