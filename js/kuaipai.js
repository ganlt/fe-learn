// 快排时间复杂度，最好O(nlogn)，最坏O(n*n)

// 快速排序（递归实现）：
// 选取一个数为基准树，设置左数组和右数组两个数组存放比较结果
// 每一次循环过程将大于基准数的数放在右数组，小于基准数的放在左数组
// 递归左数组和右数组
// 当数组长度小于2时，返回当前数组即可
let arr = [24,13,3,25,67,20]

let quickSort = (array) => {
  if(array.length < 2) return array
  let baseNum = array[0]
  let leftArr = []
  let rightArr = []
  array.forEach(ele => {
    if(ele < baseNum) {
      leftArr.push(ele)
    } else if (ele > baseNum) {
      rightArr.push(ele)
    }
  })
  return quickSort(leftArr).concat(baseNum, quickSort(rightArr))
}

console.log(quickSort(arr))