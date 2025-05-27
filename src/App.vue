<script>
import TodoSubmiter from './components/TodoSubmiter.vue'
import TodoList from './components/TodoList.vue'

const options = {
  components: { TodoSubmiter, TodoList },

  data() {
    return {
      todos: [
        { id: 1, caption: 'Проснуться', isCompleted: false },
        // { id: 2, caption: 'Умыться', isCompleted: false },
      ],
    }
  },
}

export default options
</script>

<template>
  {{ todos }}
  <button @click="todos[0].isCompleted = true">LOL</button>
  <main class="container">
    <h1>Список задач</h1>

    <TodoSubmiter @todo-submit="todos.push($event)" />

    <TodoList v-model="todos" />

    <TodoList v-model="todos" />

    <TodoList v-model="todos" />

    <TodoList v-model="todos" />
  </main>
</template>
