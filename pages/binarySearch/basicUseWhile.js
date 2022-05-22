/**
 * 基礎 binary search While 迴圈版本
 */
// 排序陣列
const arr = [1, 8, 5, 10, 9, 20].sort((a, b) => a - b)

const binarySearch = (data, target) => {
  let left = 0
  let right = data.length - 1
  while (left <= right) {
    // [0,5] => min = 3
    const mid = Math.floor((left + right) / 2)
    // 如果 中間值 等於 目標值，則代表找到了(true)
    if (data[mid] === target) return true
    if (data[mid] > target) {
      // 中間數已經找過了，所以往左一個
      // [0,2]
      right = mid - 1
    }
    if (data[mid] < target) {
      // 中間數已經找過了，所以往右一個
      // [4,5]
      left = mid + 1
    }
  }
  // 沒找到 return false
  return false
}

/* 測試 */
binarySearch(arr, 5) // 3
binarySearch(arr, 19) // false
