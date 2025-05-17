const o = { a: 42, b: { x: 42 } }

const arr = []

arr.push({
  a: 42,
  b: { x: 42 },
  // foo() {
  //   return 42
  // },
  // c: 42n,
  d: new Date(),
  e: /qwert/g,
})
arr.push({ a: 42, b: { x: 42 } })

// o

// const copyO = { ...o, b: { ...o.b } }

// copyO.a = 33
// copyO.b.x = 33

// o

// const copyArr = arr.map(obj => ({ ...obj }))

// const copyArr = JSON.parse(JSON.stringify(arr))

const copyArr = structuredClone(arr)

copyArr[0].a = 33
copyArr[0].b.x = 33

console.log(copyArr)

console.log(arr)

// console.log(arr[0].foo())

// console.log(copyArr[0].d instanceof Date)

// console.log(copyArr[0].d instanceof Date)
