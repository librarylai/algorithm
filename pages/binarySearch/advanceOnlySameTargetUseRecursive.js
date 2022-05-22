/**
 * 進階：
 * 除了『最前』或『最後』的 index，其他都回傳 null 遞迴版本：
 */

/* 此範例為：取最前面 index */
const arr = [1, 3, 6, 6, 6, 10, 12]

function binarySearch(data, target, left = 0, right = data.length, matchIndex = null) {
  // matchIndex 用來記錄有與目標值匹配到的 index
  const midIndex = Math.floor((left + right) / 2)
  // 這邊不再回傳 left，改回傳 matchIndex
  // 如果都沒匹配到，自然會回傳預設值(null)
  if (left > right) return matchIndex
  if (data[midIndex] >= target) {
    nextRight = midIndex - 1
    // 注意這邊，
    // 如果 等於目標值 則將 matchIndex 改成現在的 midIndex 並往下繼續查詢
    // 如果 沒有匹配到 則用原本的 matchIndex 繼續查詢
    return binarySearch(data, target, left, nextRight, data[midIndex] === target ? midIndex : matchIndex)
  }
  // ps. 如果是要取 『最後 index』則將『等號』加在這。
  if (data[midIndex] < target) {
    nextLeft = midIndex + 1
    // 如果是要取 『最後 index』則將 matchIndex 判斷與上面對調。
    return binarySearch(data, target, nextLeft, right, matchIndex)
  }
}
binarySearch(arr, 6) // 2
binarySearch(arr, 7) // null
