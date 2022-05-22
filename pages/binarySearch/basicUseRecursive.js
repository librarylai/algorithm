/**
 * 基礎 binary search 遞迴版本
 * binarySearchForPJCHENder 為參考 PJCHENder 大大
 */

const arr = [1, 8, 5, 10, 9, 20].sort((a, b) => a - b)

function binarySearch(data, target, left = 0, right = data.length) {
  // 取得 陣列內 正中間的 index (如果有小數點則無條件捨去 ex. 3.5 => 3)
  const midIndex = Math.floor((left + right) / 2)
  // 先判斷 如果 中間值 等於 目標值，則代表找到了(true)
  if (data[midIndex] === target) return true
  // 如果左邊界超過右邊 代表此目標值 不太 陣列中
  // 舉例[0,6] -> [4,6] -> [5,6] -> [6,6] -> [7,6](超過了...不符合)
  if (left > right) return false
  // 如果沒找到，則比較 中間值 與 目標值 大小
  // 如果 中間值 大於 目標值
  if (data[midIndex] > target) {
    // 因為 中間值 大於 目標值，因此代表目標值會位於 『陣列的前半段』
    // 因此將『右邊界』設定到『中間前一位』的 index
    // 並再次進行 二分搜尋
    nextRight = midIndex - 1
    return binarySearch(data, target, left, nextRight)
  }
  // 如果 中間值 小於 目標值
  if (data[midIndex] < target) {
    // 因為 中間值 小於 目標值，因此代表目標值會位於 『陣列的後半段』
    // 因此將『左邊界』設定到『中間後一位』的 index
    // 並再次進行 二分搜尋
    nextLeft = midIndex + 1
    return binarySearch(data, target, nextLeft, right)
  }
}

// 參考 PJCHENder 大大

const binarySearchForPJCHENder = (data, target) => {
  // 取得 陣列內 正中間的 index (如果有小數點則無條件捨去 ex. 3.5 => 3)
  const midIndex = Math.floor(data.length / 2)
  // 右邊界
  const right = data.length - 1
  // 左邊界
  const left = 0
  // 先判斷 如果 中間值 等於 目標值，則代表找到了(true)
  if (data[midIndex] === target) return true
  // 如果沒找到 則看一下現在 陣列內容 是否只剩下自己(長度為1)，
  // 因為每次我們都會透過 二分搜尋法 去刪減掉 陣列的長度，
  // 因此到最後 如果都沒找到 必定會剩下最後一個，
  // 如果連最後都沒找到 則代表 目表值不存在於陣列中(false)
  if (data.length === 1) return false

  // 如果沒找到，則比較 中間值 與 目標值 大小
  // 如果 中間值 大於 目標值
  if (data[midIndex] > target) {
    // 因為中間值已經比較過了，因此 取『前一位』的 index
    const midBeforeIndex = midIndex - 1
    // 再次丟進 二分搜尋法中查詢
    return binarySearch(data.slice(left, midBeforeIndex), target)
  }
  // 如果 中間值 小於 目標值
  if (arr[midIndex] < target) {
    // 因為中間值已經比較過了，因此 取『後一位』的 index
    const midAfterIndex = midIndex + 1
    // 再次丟進 二分搜尋法中查詢
    return binarySearch(data.slice(midAfterIndex, right + 1), target)
  }
}

/* 測試 */
binarySearch(arr, 5) // 3
binarySearch(arr, 19) // false
/* 測試 PJCHENder */
binarySearchForPJCHENder(arr, 5) // 3
binarySearchForPJCHENder(arr, 19) // false
