<!-- <script setup>
import { ref } from 'vue'
import { useTaskStore } from "../store/tasks"
let store = useTaskStore()
</script> -->

<template>
  <p>home - {{ list }} </p>
  
</template>

<script>
// import { ref } from 'vue'
import { useTaskStore } from "../store/tasks"
export default {
  name: 'HomeView',
  setup() {
    const store = useTaskStore()
    const list = store.tasks
  }
}
</script>

<style scoped>
</style>
