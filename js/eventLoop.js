// console.log('1');
// const p = new Promise((resolve, reject)=> {
//   console.log('2');
//   resolve(22);
// }).then((res) => {
//   console.log('4');
//   console.log(res)
// })
// console.log('3');

// console.log('main1');
// 该函数仅在 Node.js 环境下可以使用
// process.nextTick(function(){
//     console.log('process.nextTick1');
// });
// setTimeout(function(){
//     console.log('setTimeout');
//     process.nextTick(function(){
//         console.log('process.nextTick2');
//     });
// },0);
// new Promise(function(resolve,reject){
//     console.log('promise');
//     resolve();
// }).then(function(){
//     console.log('promise then');
// });
// console.log('main2');


// function  foo(){
//   console.log("Start of queue");
//   bar();
//   setTimeout(function(){
//       console.log("Middle of queue");
//   },0);
//   Promise.resolve().then(function(){
//       console.log("Promise resolved");
//       Promise.resolve().then(function(){
//           console.log("Promise resolved again");
//       });
//   });
//  console.log("End of queue");
// }

// function bar(){
//   setTimeout(function(){
//         console.log("Start of next queue");
//   },0);
//   setTimeout(function(){
//         console.log("End of next queue");
//   },0);
// }

// foo();


// setTimeout(()=>{
//   console.log('A');
// },0);
// var obj={
//   func: function () {
//       setTimeout(function () {
//           console.log('B')
//       },0);
//       return new Promise(function (resolve) {
//           console.log('C');
//           resolve();
//       })
//   }
// };
// obj.func().then(function () {
//   console.log('D')
// });
// console.log('E');

// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  //async2做出如下更改：
  new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
  });
}
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0)
async1();

new Promise(function(resolve) {
  console.log('promise3');
  resolve();
}).then(function() {
  console.log('promise4');
});

console.log('script end');