<script>
	import TodoSubmiter from './components/TodoSubmiter.vue'
	import TodoList from './components/TodoList.vue'

	export default {
		components: {
			TodoSubmiter,
			TodoList,
		},

		data() {
			return {
				todos: [
					{ id: 1, caption: 'Яблоко' },
					{ id: 2, caption: 'Молоко' },
				],
			}
		},
	}
</script>

<template>
	<main class="container">
		<h1>Список задач</h1>

		<TodoSubmiter @todo-submit="todos.push($event)" />

		<TodoList v-model="todos" />
	</main>
</template>
