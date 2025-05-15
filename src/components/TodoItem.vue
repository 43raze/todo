<script>
	export default {
		props: ['todo'],

		emits: ['todo-removed'],

		data() {
			return {
				isCompleted: false,
			}
		},
	}
</script>

<template>
	<li :class="{ completed: isCompleted }">
		<input type="checkbox" class="checkbox" v-model="isCompleted" />

		<span class="task-text">{{ todo.caption }}</span>

		<button class="deleteButton" @click="$emit('todo-removed', todo)">
			Удалить
		</button>
	</li>
</template>
