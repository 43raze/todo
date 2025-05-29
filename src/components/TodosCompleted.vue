<script>
export default {
  props: ['todosCompleted'],
}
</script>

<template>
  <div>
    <h3>Выполнено:</h3>
    <b v-for="todoCompleted of todosCompleted">
      [
      <i>{{ todoCompleted }}</i>
      ]
    </b>
  </div>
</template>
