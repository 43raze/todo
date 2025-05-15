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
		/>
	</ul>
</template>
