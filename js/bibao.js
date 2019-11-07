/**
 * 
==============================================
Question:
定义这样一个函数
function repeat(func, times, wait) {
}
参数分别是需要 repeat的函数， repeat的次数，每次repeat的间隔
使用方式如下
调用这个函数能返回一个新函数。

比如传入的是alert， 执行10次，间隔5秒
var repeatedFun = repeat(alert, 10, 5000);
调用返回的这个新函数，如: 

repeatedFun("hellworld");

会alert十次 helloworld
====================请自行完成=================
 */
// 方案一
function repeat(func, times, wait) {
  return (str) => {
    for(let i = 0; i < times; i++) {
      setTimeout(()=> {
        func(str)
      }, wait*i)
    }
  }
}
var repeatedFun = repeat(console.log, 10, 5000);
repeatedFun("hellworld");

// 方案二
// function repeat(func, times, wait) {
//   let count = 0;
//   function promise() {
//     return new Promise(resolve => {
//       setTimeout(()=> {
//         resolve()
//       }, wait)
//     })
//   }  
//   return function start(str) {
//     promise().then(() => {
//       func(str)
//       count++
//       if (count < times) {
//         start(str)
//       }
//     })
//   }
// }
// var repeatedFun = repeat(console.log, 3, 2000);
// repeatedFun("hellworld");
