const MOCK_DATA = [45, 30, 10, 40, 20, 35, 15, 25, 50]

function bubbleSort(data) {
  // 每一輪要執行的最後一位 index
  let lastIndex = data.length - 1
  // 總共要執行 n - 1 輪
  // 以這邊為例：總共要執行 i=0 ..... i=7
  for (let i = 0; i < data.length - 1; i++) {
    console.log(`第${i + 1}輪，執行：${lastIndex}次`)
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
