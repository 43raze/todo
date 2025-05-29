const randId = () => Math.trunc(Math.random() * 0xffffffff).toString(16)
const initTodo = () => ({
  id: randId(),
  caption: '',
})
console.log(initTodo())
console.log(initTodo())
console.log(initTodo())
console.log(initTodo())
console.log(initTodo())
console.log(initTodo())
console.log(initTodo())
