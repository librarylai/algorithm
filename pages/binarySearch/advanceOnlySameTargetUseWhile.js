/**
 * 進階：
 * 除了『最前』或『最後』的 index，其他都回傳 null，While 迴圈版本：
 */

/* 此範例為：取最前面 index */
const arr = [1, 3, 6, 6, 6, 10, 12]

const binarySearch = (data, target) => {
  let left = 0
  let right = data.length - 1
  let matchIndex = null
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // 如果有匹配到 則將 mid 記錄到 matchIndex
    if (data[mid] === target) matchIndex = mid
    if (data[mid] >= target) {
      right = mid - 1
    }
    // 如果取『最後 index』只需將此改成 <=
    if (data[mid] < target) {
      left = mid + 1
    }
  }
  // 最後回傳 matchIndex
  return matchIndex
}
binarySearch(arr, 6) // 2
binarySearch(arr, 7) // null
