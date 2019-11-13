// 数组去重
let arr = [2, 4, 5, 23, 24, 4, 2, 26];

// 1. ES6: Set()
// let unique = (arr) => {
//   return Array.from(new Set(arr));
// }

// 2. ES5：for循环嵌套，使用splice

// let unique = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1)
//         j--
//       }
//     }
//   }
//   return arr
// }

// 3. 使用indexof

// let unique = (arr) => {
//   let array = []
//   for (let i = 0; i < arr.length; i++) {
//     if (array.indexOf(arr[i]) === -1) {
//       array.push(arr[i])
//     }
//   }
//   return array
// }

// 4. 使用sort

// let unique = (arr) => {
//   arr = arr.sort()
//   let array = [arr[0]]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i-1]) {
//       array.push(arr[i])
//     }
//   }
//   return array
// }

// 5. 利用对象的属性不能相同

// let unique = (arr) => {
//   let array = []
//   let obj = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in obj) {
//       continue
//     } else {
//       array.push(arr[i])
//       obj[arr[i]] = true
//     }
//   }
//   return array
// }

// 6. includes

let unique = (arr) => {
  let array = []
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i])
    }
  }
  return array
}

const a = unique(arr)
console.log(a)