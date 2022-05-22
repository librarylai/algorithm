/**
 * 進階：
 * 多個目標值時的情況（沒有時，取大於目標值且最接近的項目）While 迴圈版本
 */

// 排序陣列
const arr = [1, 3, 6, 6, 6, 10, 12]

const binarySearch = (data, target) => {
  let left = 0
  let right = data.length - 1
  while (left <= right) {
    // [0,6] => min = 4
    const mid = Math.floor((left + right) / 2)
    // 注意這邊多了 等號，代表就算找到了，也繼續往前尋找。
    if (data[mid] >= target) {
      // 中間數已經找過了，所以往左一個
      // [0,3]
      right = mid - 1
    }
    // 如果是『取最後一個 index』則是這邊加上 等號
    if (data[mid] < target) {
      // 中間數已經找過了，所以往右一個
      // [4,5]
      left = mid + 1
    }
  }
  // 最後都回傳 left
  return left
}
binarySearch(arr, 6) // 2
binarySearch(arr, 7) // 5 ---> 大於它，且最接近
