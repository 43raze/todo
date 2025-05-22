<script>
export default {
  props: ['todo'],

  emits: ['todo-removed', 'todo-edited'],

  data() {
    return {
      localTodo: { ...this.todo },
    }
  },

  watch: {
    localTodo(newValue) {
      this.$emit('todo-edited', { ...newValue })
    },
  },
}
</script>

<template>
  <li :class="{ completed: localTodo.isCompleted }">
    <input
      :checked="localTodo.isCompleted"
      @change="localTodo.isCompleted = $event.target.checked"
      type="checkbox"
      class="checkbox"
    />

    <span class="task-text">{{ localTodo.caption }}</span>

    <button
      class="deleteButton"
      @click="$emit('todo-removed', { ...localTodo })"
    >
      Удалить
    </button>
  </li>
</template>
