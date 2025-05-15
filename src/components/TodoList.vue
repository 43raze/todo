<script>
import TodoItem from './TodoItem.vue'

export default {
  components: { TodoItem },

  props: ['modelValue'],

  emits: ['update:model-value'],

  methods: {
    removeTodo(todo) {
      return this.modelValue.filter(f => f !== todo)
    },
    editTodo(todo, isCompleted) {
      return this.modelValue.map(t =>
        t === todo ? { ...todo, isCompleted } : t
      )
    },
  },
}
</script>

<template>
  <ul id="taskList">
    <TodoItem
      v-for="todo of modelValue"
      :key="todo.id"
      :todo="todo"
      @todo-removed="$emit('update:model-value', removeTodo($event))"
      @todo-edited="$emit('update:model-value', editTodo(todo, $event))"
    />
  </ul>
</template>
