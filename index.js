'use strict'
const activeApp = require('./')
const EventEmitter = require('events').EventEmitter
const equal = require('deep-equal')

class ActiveAppWatcher extends EventEmitter {
  constructor(interval) {
    super()
    this.interval = interval || 1000
    this.lastApp = null
    this.targetState = 'start'
    this.timeout = null
  }


  tick() {
    let self = this
    activeApp((err, app) => {
      if (err) {
        return self.emit('error', err)
      }

      self.emit('check', app)

      if (!equal(app, self.lastApp)) {
        self.emit('change', app)
        self.lastApp = app
      }
    })
  }

  start() {
    let self = this
    this.tick()
    this.once('check', () => {
      if (self.targetState === 'start') {
        self.timeout = setTimeout(() => {
          self.start()
        }, self.interval)
      }
    })
  }

  stop() {
    this.targetState = 'stop'
    cancelTimeout(this.timeout)
  }
  
}

module.exports = ActiveAppWatcher
