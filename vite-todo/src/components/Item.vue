<template>
  <div class="item">
    <button class="icon" @click="onDelete()">
      <slot name="icon" />
      <span class="material-symbols-outlined">
        check_box_outline_blank
        </span>
        <span class="material-symbols-outlined">
check_box
</span>
    </button>
    <div class="title=">Título da task</div>
    <div class="action">
      <button @click="onDelete()">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  setup() {
    const onSelect = () => {
      console.log('select')
    }

    const onDelete = () => {
      console.log('delete')
    }

    return {
      onDelete
    }
  }
}
</script>

<style scoped>
.item {
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
}
</style>
