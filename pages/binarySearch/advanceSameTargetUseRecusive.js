/**
 * 進階：
 * 多個目標值時的情況（沒有時，取大於目標值且最接近的項目）遞迴版本
 */

// 排序陣列
const arr = [1, 3, 6, 6, 6, 10, 12]

function binarySearch(data, target, left = 0, right = data.length) {
  // 取得 陣列內 正中間的 index (如果有小數點則無條件捨去 ex. 3.5 => 3)
  const midIndex = Math.floor((left + right) / 2)
  // 如果左邊界超過右邊 代表此目標值 不太 陣列中
  // 舉例[0,6] -> [4,6] -> [5,6] -> [6,6] -> [7,6](超過了...不符合)
  // 此時的 left 代表最接近目標值的 index
  if (left > right) return left
  // 如果 中間值 大於 目標值 或 找到目標值
  // 都繼續往前找看看，因為我們要取得的是『最前面 index』
  if (data[midIndex] >= target) {
    // 因此只要『中間值大於目標值』或『找到目標值』，
    // 都再去檢查『陣列前半段』的內容， 檢查是否還有符合目標值的項目。

    // 因此將『右邊界』設定到『中間前一位』的 index
    // 並再次進行 二分搜尋
    nextRight = midIndex - 1
    return binarySearch(data, target, left, nextRight)
  }
  // 如果 中間值 小於 目標值
  // PS. 如果是要找 『最後一位 index』則是這邊加上 等號(<=)
  if (data[midIndex] < target) {
    // 因為 中間值 小於 目標值，因此代表目標值會位於 『陣列的後半段』
    // 因此將『左邊界』設定到『中間後一位』的 index
    // 並再次進行 二分搜尋
    nextLeft = midIndex + 1
    return binarySearch(data, target, nextLeft, right)
  }
}
binarySearch(arr, 6) // 2
binarySearch(arr, 7) // 5 ---> 大於它，且最接近
