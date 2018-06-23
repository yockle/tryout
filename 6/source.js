process.stdin.resume()
process.stdin.setEncoding('utf8')

var answer
var cnt = 0

//0～99の値をランダムで取得
answer = Math.floor(Math.random() * 100)
console.log('0-100で数字を当てて')

// 標準入力がくると発生するイベント
process.stdin.on('data', function(chunk) {
  chunk
    .trim()
    .split('\n')
    .forEach(function(line) {
      // 1行ずつ処理
      checkAnswer(line)
    })
})

function checkAnswer(line) {
  cnt++
  if (line == answer) {
    console.log('正解！・・・' + cnt + '回目で当てました')
  } else if (line < answer) {
    console.log('もっと上')
  } else {
    console.log('もっと下')
  }
}
