/**
 * EventEmitter本质上是一个观察者模式的实现
 * 观察者：emit 被监听者：on
 */
class EventEmitter {
  constructor () {
    this.queue = {} // 可以触发多次的事件
    this.onceQueue = {} // 只能触发一次的事件
  }
  on(event, fn) {
    // 监听事件，可以触发多次
    if (!this.queue[event]) this.queue[event] = []
    this.queue[event].push(fn)
  }
  addListener(event, f) {
    // 监听事件，可以触发多次
    if (!this.queue[event]) this.queue[event] = []
    this.queue[event].push(fn)
  }
  once(event, fn) {
    // 监听事件，只能触发一次
    if (!this.onceQueue[event]) {
      this.onceQueue[event] = {
        fns: [],
        hasFired: false
      }
    }
    this.onceQueue[event].fns.push(fn)
  }
  listeners(event) {
    /**
     * return 一个数组，成员是事件event所有监听函数
     */
    return this.queue[event]
  }
  removeListener(event, fn) {
    // 移除事件event的监听函数f
    if (!!this.queue[event]) {
      this.queue[event] = this.queue[event].filter(cb => {
        return cb !== fn
      })
    }
  }
  removeAllListeners(event) {
    // 移除事件event的所有监听函数
    if (event) {
      this.queue[event] = []
    } else {
      this.queue = Object.create(null)
    }
  }
  emit(event, ...arg) {
    if (!!this.queue[event]) {
      this.queue[event].forEach((e, i) => {
        if (typeof e === 'function') {
          Reflect.apply(e, this, arg)
        } else {
          return console.error(`${e} is not a function in [${i}]`)
        }
      })
    }
  }
}
