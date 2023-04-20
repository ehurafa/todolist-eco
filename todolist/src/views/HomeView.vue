<script setup>
import { useTaskStore } from "../stores/tasks"
let store = useTaskStore()
</script>

<template>
  <p>home - {{ store.tasks }}</p>
  
</template>

<script>
export default {
  name: 'HomeView'
}
</script>


<style scoped>
</style>
