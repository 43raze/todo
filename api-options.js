function renderMessage(message) {
  console.log('>>', message, '<<')
}

const options = {
  message: '',
}

const optionsProxy = new Proxy(options, {
  set(target, prop, value) {
    target[prop] = value
    if (prop === 'message') renderMessage(value)
    return true
  },
})

function AppOptions() {
  this.message = 'yo!'
}

AppOptions.call(optionsProxy)
