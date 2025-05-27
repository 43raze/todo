<script>
import TodoSubmiter from './components/TodoSubmiter.vue'
import TodoList from './components/TodoList.vue'

const options = {
  components: { TodoSubmiter, TodoList },

  data() {
    return {
      todos: [
        { id: 1, caption: 'Проснуться', isCompleted: false },
        { id: 2, caption: 'Умыться', isCompleted: false },
      ],
      i: { x: 1 },
      // o: {},
    }
  },

  watch: {
    i: {
      deep: true,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) return
        console.log('yo')
      },
    },
  },
}

export default options
</script>

<template>
  <!-- джаваскриптовое выражение -->

  <button @click="i.x += 1">MUTATE</button>

  <button @click="i = { ...i, x: i.x + 1 }">OVERRIDE</button>

  {{ i }}

  <main class="container">
    <h1>Список задач</h1>

    <TodoSubmiter @todo-submit="todos.push($event)" />

    <TodoList v-model="todos" />

    <br />

    <TodoList v-model="todos" />

    <TodoList v-model="todos" />

    <TodoList v-model="todos" />
  </main>
</template>
