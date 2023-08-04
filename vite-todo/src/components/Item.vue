<template>
  <div class="item">
    <button class="icon" @click="onSelect()">
      <slot name="icon" />
      <span class="material-symbols-outlined" v-if="selected">
        check_box
      </span>
      <span class="material-symbols-outlined" v-else>
        check_box_outline_blank
      </span>
        
    </button>
    <div class="title=">Título da task</div>
    <div class="action">
      <button @click="onDelete()">delete</button>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useTaskStore } from "../store/tasks"
export default {
  name: 'Item',
  props: {
    id: String | Number,
    selected: Boolean
  },
  setup({ id, selected },{ emit }) {

    const store = useTaskStore()
    const item = store.tasks[id]
      
    const onSelect = () => {
      console.log('> selected ', selected)
      const select = !selected 
      console.log('> select ', select)
      emit('select', { id, selected: select })
    }

    const onDelete = () => {
      console.log('delete ', id)
      emit('deleted', id)
    }

    onMounted(() => {
      // selectd = item.selected
    })

    return {
      selected,
      onSelect,
      onDelete,
      onMounted
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
