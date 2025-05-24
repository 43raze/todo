function renderMessage(message) {
  console.log('>>', message, '<<')
}

const ref = value => {
  const obj = { value }
  const proxy = new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value
      if (prop === 'value') renderMessage(value)
      return true
    },
  })
  return proxy
}

const message = ref('')

function AppComposition() {
  message.value = 'yo!'
}

AppComposition()
