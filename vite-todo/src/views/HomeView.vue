<!-- <script setup>
import { ref } from 'vue'
import { useTaskStore } from "../store/tasks"
let store = useTaskStore()
</script> -->

<template>
  <div class="home-view">
    <span class="material-symbols-outlined">
search
</span>
    <Item v-for="item in tasks.length" :key="item">
      <template v-slot:icon>icon</template>
    </Item>
  <ActionButton />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from "../store/tasks"
import Item from "../components/Item.vue"
import ActionButton from "../components/ActionButton.vue"

export default {
  components: { Item, ActionButton },
  setup() {

    const tasks = ref([1, 2, 3, 4, 5, 6])

    const store = useTaskStore()
    const list = store.tasks 

    return {
      teste: 'teste',
      tasks
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";
</style>
