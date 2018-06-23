process.stdin.resume()
process.stdin.setEncoding('utf8')

var numSum

// 標準入力がくると発生するイベント
process.stdin.on('data', function(chunk) {
  chunk
    .trim()
    .split('\n')
    .forEach(function(line) {
      // 1行ずつ処理
      outLines(line)
    })
})

function outLines(line) {
  numSum = 0
  calc(line)
  console.log('1から' + line + 'までの合計　：' + numSum)
}

function calc(num) {
  numSum += Number(num)
  if (num > 1) {
    calc(num - 1)
  }
}
