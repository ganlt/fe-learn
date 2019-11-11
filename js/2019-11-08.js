// 找出一个数组中出现次数最多的元素以及次数
const arr = [2,4,4,5]

caculate(arr);

function caculate(arr) {
  if(!arr.length) return
  if(arr.length === 1) return 1
  let result = {}
  let maxName, maxNum = 0
  arr.forEach(val => {
    result[val]? result[val] += 1 : result[val] = 1
  });
  for (p in result) {
    if (result[p] > maxNum) {
      maxNum = result[p]
      maxName = p
    }
  }
  console.log(`${maxName}: ${maxNum}`)
}