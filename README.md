# active-app-watcher

> Event emitting active window/app watcher

## Install

```
$ npm install active-app-watcher --save
```

## Usage

```js
import ActiveAppWatcher from 'active-app-watcher'

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
```

## Related

* [active-app](https://github.com/bencevans/active-app) - Detect the active window/application

## Licence

MIT © [Ben Evans](http://bensbit.co.uk)

## 
