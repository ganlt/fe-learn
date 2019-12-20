let str = '1, -2, 3, 10, -4, 7, 2, -5';

let arr = new Number(str.split(','));

function caculate(arr) {
  // let maxNum = 0;
  let maxArr = [];
  for(let i = 0; i < arr.length; i++) {
    maxNum += arr[i];
    maxArr.push(arr[i])
  }
  return maxArr;
}

let res = caculate(arr);
console.log(res);