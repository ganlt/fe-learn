/**
 * 杨辉三角
 */

const a = (n) => {
  for (let i = 0 ; i < n ; i++) {
    let arr = []
    for (let j = 0 ; j <= i ; j++) {
      arr.push(combine(i, j))
    }
    console.log(arr.join(' '))
  }
}

const combine = (m, n) => {
  if (n === 0) return 1;
  else if (m === n) return 1;
  else return combine(m - 1, n - 1) + combine(m - 1, n)
}

a(7);