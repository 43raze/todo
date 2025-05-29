<script>
import TodoSubmiter from './components/TodoSubmiter.vue'
import TodosCompleted from './components/TodosCompleted.vue'
import TodosList from './components/TodosList.vue'

const options = {
  components: { TodoSubmiter, TodosList, TodosCompleted },

  data() {
    return {
      todos: [
        { id: '1', caption: 'Проснуться', isCompleted: false },
        { id: '2', caption: 'Умыться', isCompleted: false },
      ],
      // todosCompleted: ['Проснуться', 'Умыться'], // зависимое состояние
    }
  },

  computed: {
    todosCompleted() {
      return this.todos.filter(t => t.isCompleted).map(t => t.caption)
    },

    todosCount() {
      return this.todos.length
    },

    todosCountCompleted() {
      return this.todosCompleted.length
    },
  },
}

export default options
</script>

<template>
  {{ todosCountCompleted }}

  <main class="container">
    <h1>Список задач</h1>

    <TodoSubmiter @todo-submit="todos.push($event)" />

    <TodosList v-model="todos" />

    <TodosCompleted :todos-completed="todosCompleted" />
  </main>
</template>
