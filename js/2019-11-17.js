// 作者：叉烧两份
// 链接：https://www.nowcoder.com/discuss/207917?type=post&order=time&pos=&page=1
// 来源：牛客网

class Scheduler {
  constructor() {
    this.count = 0
    this.queue = []
  }
  add(promiseCreator) {
    return new Promise(resolve => {
      this.queue.push([promiseCreator, resolve]);
      if (this.count < 2) {
        this.run()
      }
    })
  }
  run() {
    if (this.queue.length === 0) return
    const [task, resolve] = this.queue.shift()
    this.count++
    task().then(() => {
      this.count--
      resolve()
      this.run()
    })
  }
}
var timeout = (time) => new Promise(resolve => { 
  console.log('in timeout:', time);
  setTimeout(resolve, time)
})
let scheduler = new Scheduler()
let addTask = (time, order) => {
    scheduler.add(() => timeout(time))
             .then(() => console.log(order))
};
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4') 
// output: 2 3 1 4 // 一开始，1、2 两个任务进入队列 // 500ms 时，2 完成，输出 2，任务 3 进队 // 800ms 时，3 完成，输出 3，任务 4 进队 // 1000ms 时，1 完成，输出 1 // 1200ms 时，4 完成，输出 4