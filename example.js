const ActiveAppWatcher = require('./')

const appWatch = new ActiveAppWatcher()

appWatch.on('error', (err) => {
  console.error(err)
})

appWatch.on('change', (app) => {
  console.log('change', app)
})

appWatch.on('check', (app) => {
  console.log('check', app)
})

appWatch.start()
