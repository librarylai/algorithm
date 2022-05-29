const MOCK_DATA = [45, 30, 10, 40, 20, 35, 15, 25, 50]

function bubbleSort(data) {
  // 每一輪要執行的最後一位 index
  let lastIndex = data.length - 1
  // 如果 lastIndex > 0 代表還有需要匹配的元素
  // ex. lastIndex = 1 代表至少還有 [0,1] 這兩個需要比對
  while (lastIndex > 0) {
    console.log(`執行：${lastIndex}次`)
    lastIndex--
    // 兩兩比對，比對到 lastIndex 當輪的最後一位
    // ex.以第一輪來講：lastIndex = 7 則代表需要比到 index7 與 index8 。
    for (let j = 0; j <= lastIndex; j++) {
      if (data[j] > data[j + 1]) {
        // 陣列內元素位置交換
        ;[data[j], data[j + 1]] = [data[j + 1], data[j]]
      }
      console.log('data', data)
    }
  }

  return data
}

bubbleSort(MOCK_DATA)
