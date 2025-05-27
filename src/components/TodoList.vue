<script>
import TodoItem from './TodoItem.vue'

export default {
  components: { TodoItem },

  props: ['modelValue'],

  emits: ['update:model-value'],

  methods: {
    removeTodo(todo) {
      const r = this.modelValue.filter(t => t !== todo)
      console.log(r)
      return r
    },
    editTodo(updatedTodo) {
      return this.modelValue.map(t =>
        t.id === updatedTodo.id ? updatedTodo : t
      )
    },
  },
}
</script>

<template>
  {{ modelValue }}
  <ul id="taskList">
    <TodoItem
      v-for="todo of modelValue"
      :key="todo.id"
      :todo="todo"
      @todo-removed="
        console.log($event), $emit('update:model-value', removeTodo($event))
      "
      @todo-edited="
        console.log($event), $emit('update:model-value', editTodo($event))
      "
    />
  </ul>
</template>
