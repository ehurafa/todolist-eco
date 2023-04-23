<template>
  <div class="the-container">
    <div><slot /></div>
  </div>
</template>

<script>
export default {
  name: 'TheContainer'
}
</script>

<style scoped lang="scss">
@import "../assets/styles/_variables.scss";
.the-container {
  display: flex;
  justify-content: center;
  div {
    border: 1px solid #fff;
    width: 100%;
    max-width: $grid-sm;
    min-height: 50vh;
  }
}
</style>
