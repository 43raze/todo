<script>
export default {
  props: ['todo'],

  emits: ['todo-removed', 'todo-edited'],
}
</script>

<template>
  <button @click="todo = 'yo'">{{ todo.id }}</button>
  <li :class="{ completed: todo.isCompleted }">
    <!-- <input v-model="todo.isCompleted" type="checkbox" class="checkbox" /> -->

    <input
      :checked="todo.isCompleted"
      @change="$emit('todo-edited', $event.target.checked)"
      type="checkbox"
      class="checkbox"
    />

    <span class="task-text">{{ todo.caption }}</span>

    <button class="deleteButton" @click="$emit('todo-removed', todo)">
      Удалить
    </button>
  </li>
</template>
