<template>
    <TheContainer>
      <router-view />
   </TheContainer>
</template>

<script>
import TheContainer from './components/TheContainer.vue'
export default {
  name: 'App',
  components: { TheContainer }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
