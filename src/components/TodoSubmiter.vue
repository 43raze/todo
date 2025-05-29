<script>
const randId = () => Math.trunc(Math.random() * 0xffffffff).toString(16)
const initTodo = () => ({
  id: randId(),
  caption: '',
})

export default {
  emits: ['todo-submit'],

  data() {
    return {
      todo: initTodo(),
    }
  },

  methods: {
    addTodo() {
      if (this.todo.caption) {
        this.$emit('todo-submit', { ...this.todo })
        this.todo = initTodo()
      }
      this.$refs.todoInput.focus()
    },
  },
}
</script>

<template>
  <input
    v-model.trim="todo.caption"
    placeholder="Введите задачу"
    ref="todoInput"
    @keypress.enter="addTodo"
  />
  <button @click="addTodo">Добавить задачу</button>
</template>
