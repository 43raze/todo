<script>
	export default {
		emits: ['todo-submit'],

		data() {
			return {
				todo: { id: 3, caption: '' },
			}
		},

		methods: {
			addTodo() {
				this.todo.caption = this.todo.caption.trim()
				if (this.todo.caption) {
					this.$emit('todo-submit', {
						id: this.todo.id,
						caption: this.todo.caption,
					})
					this.todo.caption = ''
					this.todo.id += 1
				}
			},
		},
	}
</script>

<template>
	<input
		v-model="todo.caption"
		id="taskInput"
		placeholder="Введите задачу"
		ref="todoInput"
	/>
	<button id="addTaskButton" @click="addTodo">Добавить задачу</button>
</template>
