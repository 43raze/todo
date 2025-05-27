<script>
export default {
  props: ['todo'],

  emits: ['todo-removed', 'todo-edited'],

  data() {
    return {
      localTodo: { ...this.todo },
      i: 0,
    }
  },

  watch: {
    todo: {
      deep: true,
      handler(newValue) {
        console.log(this.i++)
        this.localTodo = { ...newValue }
      },
    },

    localTodo: {
      deep: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) return
        console.log(newValue)
        this.$emit('todo-edited', { ...newValue })
      },
    },
  },
}
</script>

<template>
  {{ todo }}
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
